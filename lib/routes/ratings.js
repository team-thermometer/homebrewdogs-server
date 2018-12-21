const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
        SELECT id, rating
        FROM ratings
        WHERE profile_id = $1;
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
    RETURNING id, rating;
  `,
    [req.params.id, rating]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  .post('/', (req, res) => {
    const body = req.body;
    client.query(`
    INSERT INTO ratings (rating, favorite_id)
    VALUES($1, $2)
    RETURNING id, rating, favorite_id as "favoriteId";
  `,
    [body.rating, body.favoriteId]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;
