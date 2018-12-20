const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const beers = require('./routes/beers');
const favorites = require('./routes/favorites');
const ratings = require('./routes/ratings');
const jwt = require('./jwt');

// enhanced logging
app.use(morgan('dev'));
// server public directory as static files
app.use(express.static('public'));
// register the json "middleware" body parser
app.use(express.json());

// eslint-disable-next-line no-unused-vars
function checkAuth(req, res, next) {
  const token = req.get('Authorization');
  if(!token) {
    res.status(401).json({ error: 'no authorization found' });
    return;
  }

  let payload = null;
  try {
    payload = jwt.verify(token);
  }
  catch (err) {
    // this code runs with verify fails
    res.status(401).json({ error: 'invalid token' });
    return;  
  }

  req.userId = payload.id;
  next();
}

// register our routes
app.use('/api/auth', auth);
app.use('/api/favorites', checkAuth, favorites);

// add routes here:
app.use('/api/beers', checkAuth, beers);
app.use('/api/ratings', checkAuth, ratings);

// TODO: TAKE THIS OUT
// const client = require('./db-client');

// app.get('/', (req, res) => {
//   client.query(`
//     SELECT * from profile;
//   `)
//     .then(result => res.json(result.rows));
// });

module.exports = app;