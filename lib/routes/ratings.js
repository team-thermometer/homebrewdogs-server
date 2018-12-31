const router = require('express').Router();
const client = require('../db-client');

router
  .get('/', (req, res) => {
    client.query(`
      SELECT *
      FROM ratings 
      -- INNER JOIN is default JOIN
      JOIN favorite 
      ON favorite.id = ratings.favorite_id
      WHERE ratings.profile_id = $1
      ORDER BY rating DESC;
    `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })

  .put('/:id', (req, res) => {
    const rating = req.body.rating;
    client.query(`
      UPDATE ratings
      SET rating = $1
      WHERE id = $2
      AND profile_id = $3
      RETURNING *;
    `,
    [rating, req.params.id, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;
    client.query(`
      SELECT id
      FROM ratings
      WHERE favorite_id = $1;
    `,
    [body.favoriteId])
      .then(result => {
        if(result.rows.length > 0) {
          res.status(400).json({ error: 'Beer already rated' });
          return;
        }
        client.query(`
          INSERT INTO ratings (rating, favorite_id, profile_id)
          VALUES($1, $2, $3)
          RETURNING 
            id, 
            rating, 
            favorite_id as "favoriteId",
            profile_id as "profileId";
        `,
        [body.rating, body.favoriteId, req.userId])
          .then(result => {
            res.json(result.rows[0]);
          });
      });
  });

module.exports = router;