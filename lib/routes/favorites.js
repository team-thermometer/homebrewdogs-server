const router = require('express').Router();
const client = require('../db-client');

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, name, ibu, abv, comments, profile_id, api_id
      FROM favorite
      WHERE profile_id = $1;
      `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;
    client.query(`
      SELECT id
      FROM favorite
      WHERE name = $1;
    `,
    [body.name])
      .then(result => {
        // see comments in create-tables.js

        if(result.rows.length > 0) {
          res.status(400).json({ error: 'Beer already added' });
          return;
        }
        client.query(`
          INSERT INTO favorite (name, ibu, abv, api_id, profile_id)
          VALUES($1, $2, $3, $4, $5)
          RETURNING
            id,
            name,
            ibu,
            abv,
            api_id as "apiId",
            profile_id as "profileId";
        `,
        [body.name, body.ibu, body.abv, body.id, req.userId])
          .then(result => {
            res.json(result.rows[0]);
          });
      });
  })
  .delete('/:id', (req, res) => {
    // you need to prevent user from deleting someone else's favorite
    client.query(`
      DELETE FROM favorite 
      WHERE id = $1
      AND profile_id = $2;
  `,
    [req.params.id, req.userId])
      .then(result => {
        res.json({ removed: result.rowCount === 1 });
      });
  })

  .get('/stats', (req, res) => {
    client.query(`
      SELECT 
        COUNT(id),
        ROUND(AVG(abv)::numeric,1) as "averageAbv",
        ROUND(MIN(abv)::numeric,1) as "minAbv",
        ROUND(MAX(abv)::numeric,1) as "maxAbv"
      FROM favorite 
      WHERE profile_id = $1;
    `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })
  .put('/:id', (req, res) => {
    const comments = req.body.comments;
    client.query(`
      UPDATE favorite
      SET comments = $1
      WHERE id = $2
      RETURNING *;
    `,
    [comments, req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;