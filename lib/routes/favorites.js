const router = require('express').Router(); 
const client = require('../db-client');

router
  .get('/', (req, res) => {
    client.query(`
        SELECT id, name, ibu, abv, comments
        FROM favorite
        WHERE profile_id = $1;
        `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })
  .post('/', (req, res) => {
    console.log('req.userId = ', req.userId);
    const body = req.body;
    console.log('req.body = ', body);
    client.query(`
      INSERT INTO favorite (name, ibu, abv, comments, api_id, profile_id)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING
        id,
        name,
        ibu,
        abv,
        comments,
        api_id as "apiId",
        profile_id as "profileId";
    `,
    [body.name, body.ibu, body.abv, body.comments, body.id, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  .delete('/:id', (req, res) => {
    client.query(`
      DELETE FROM favorite WHERE id = $1;
  `,
    [req.params.id])
      .then(result => {
        res.json({ removed: result.rowCount === 1 });
      });
  })
  .get('/stats', (req, res) => {
    client.query(`
      SELECT
        avg(ibu) as "avgIbu",
        avg(abv) as "avgAbv"
      FROM favorite;
    `)
      .then(result => res.json(result.rows[0]));
  });
module.exports = router;
