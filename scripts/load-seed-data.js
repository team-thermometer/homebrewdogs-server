
require('dotenv').config();
const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const favorites = [];

client.query(`
  INSERT INTO profile (username, hash)
  VALUES ($1, $2)
  RETURNING id;
`,
['user123', bcrypt.hashSync('abc123', 8)]
)
  .then(result => {
    const profile = result.rows[0];
    return Promise.all(
      favorites.map(favorite => {
        return client.query(`
      INSERT INTO favorite (name, type, profile_id)
      VALUES ($1, $2, $3)
    `,
        [favorite.name, favorite.type, profile.id]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });