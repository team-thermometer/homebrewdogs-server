const router = require('express').Router(); 
const client = require('../db-client');

router
  .get('/', (req, res) => {
    client.query(`
        SELECT id, name, type
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
      INSERT INTO favorite (name, type, profile_id)
      VALUES($1, $2, $3)
      RETURNING 
        id,
        name,
        type, 
        profile_id as "profileId";
    `,
    [body.name, body.type, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;
