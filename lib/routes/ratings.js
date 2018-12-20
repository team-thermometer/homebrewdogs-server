
const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .put('/:id', (req, res) => {
    const rating = req.body.rating;

    client.query(`
    UPDATE ratings
    SET rating = $1
    WHERE id = $2
    RETURNING *;
  `,
    [rating, req.params.id]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  .post('/', (req, res) => {
    const body = req.body;
    client.query(`
    INSERT INTO ratings (rating, favorite_id, profile_id)
    VALUES($1, $2, $3)
    RETURNING *;
  `,
    [body.rating, body.favoriteId, body.profileId]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;