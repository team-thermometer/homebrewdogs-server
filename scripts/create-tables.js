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
    ibu FLOAT,
    abv FLOAT,
    profile_id INTEGER NOT NULL REFERENCES profile(id),
    api_id INTEGER
  );
  CREATE TABLE IF NOT EXISTS ratings (
    id SERIAL PRIMARY KEY,
    rating FLOAT,
    favorite_id INTEGER REFERENCES favorite(id) ON DELETE CASCADE
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });