
require('dotenv').config();
const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const favorites = [
  {
    name: 'Punk IPA',
    ibu: 6.0,
    abv: 60.0
  }
];

const ratings = [
  {
    rating: 3,
    favoriteId: 1,
    profileId: 1 
  }
];

client.query(`
  INSERT INTO profile (username, hash)
  VALUES ($1, $2)
  RETURNING id;
`,
['user123', bcrypt.hashSync('abc123', 8)])

  .then(result => {
    const profile = result.rows[0];
    return Promise.all(
      favorites.map(favorite => {
        return client.query(`
      INSERT INTO favorite (name, ibu, abv, profile_id)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, ibu, abv;
    `,
        [favorite.name, favorite.ibu, favorite.abv, profile.id])
          .then(result => result.rows);
      })
    );
  })
  .then(result => {
    console.log(result);
    const profile = result[0][0];
    const favorite = result[0][0];
    return Promise.all(
      ratings.map(rating => {
        return client.query(`
      INSERT INTO ratings (rating, favorite_id, profile_id)
      VALUES ($1, $2, $3)
      RETURNING id, rating, favorite_id as "favoriteId", profile_id as "profileId";
    `,
        [rating.rating, favorite.id, profile.id])
          .then(result => result.rows[0].id);
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

