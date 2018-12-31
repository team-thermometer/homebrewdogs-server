require('dotenv').config();
const client = require('../lib/db-client');

// You are missing the "beer table" for info that you copy,
// And I'm guessing that you want favorite and ratings
// to be different? Meaning a can rate a beer I have not favorited
// (because I rate low and dislike)? 

client.query(`
  CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) NOT NULL,
    hash VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS beer (
    id PRIMARY KEY, -- use the api id, so not sequential
    name VARCHAR(256) NOT NULL,
    ibu FLOAT,
    abv FLOAT
  );

  -- if ratings and favorites are same thing:
  CREATE TABLE IF NOT EXISTS favorite (
    id SERIAL PRIMARY KEY,
    beer_id INTEGER NOT NULL REFERENCES beer(id),
    profile_id INTEGER NOT NULL REFERENCES profile(id),
    rating FLOAT,
    comments TEXT -- allow long text
  );

  -- if separate concepts:
  CREATE TABLE IF NOT EXISTS favorite (
    id SERIAL PRIMARY KEY,
    beer_id INTEGER NOT NULL REFERENCES beer(id),
    profile_id INTEGER NOT NULL REFERENCES profile(id),
  );

  CREATE TABLE IF NOT EXISTS rating (
    id SERIAL PRIMARY KEY,
    beer_id INTEGER NOT NULL REFERENCES profile(id),
    profile_id INTEGER NOT NULL REFERENCES profile(id),
    rating FLOAT,
    comments TEXT -- allow long text
  );

`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });