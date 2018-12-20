require('dotenv').config();
const client = require('../lib/db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) NOT NULL,
    hash VARCHAR(256) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS favorite (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    ibu INTEGER NOT NULL,
    abv INTEGER NOT NULL,
    profile_id INTEGER NOT NULL REFERENCES profile(id)
  );
  CREATE TABLE IF NOT EXISTS ratings (
    id SERIAL PRIMARY KEY,
    rating INTEGER,
    favorite_id INTEGER NOT NULL REFERENCES favorite(id),
    profile_id INTEGER NOT NULL REFERENCES profile(id)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });