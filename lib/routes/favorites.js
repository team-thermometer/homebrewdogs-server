const router = require('express').Router(); 
const client = require('../db-client');

router
  .get('/', (req, res) => {
    client.query(`
        SELECT id, name
        FROM favorite
        WHERE profile_id = $1;
        `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })
  .post('/', (req, res) => {
    console.log('post - userId\n\n\n', req.userId);
    const body = req.body;
    console.log('post\n\n\n', body);
    client.query(`
      INSERT INTO favorite (name, profile_id)
      VALUES($1, $2)
      RETURNING
        id,
        name,
        profile_id as "profileId";
    `,
    [body.name, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;
