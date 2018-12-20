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
    console.log('post - userId\n\n\n', req.userId);
    const body = req.body;
    console.log('post\n\n\n', body);
    client.query(`
      INSERT INTO favorite (name, ibu, abv, comments, profile_id)
      VALUES($1, $2, $3, $4, $5)
      RETURNING
        id,
        name,
        ibu,
        abv,
        comments,
        profile_id as "profileId";
    `,
    [body.name, body.ibu, body.abv, body.comments, req.userId])
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
