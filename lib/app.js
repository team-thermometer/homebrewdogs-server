const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const beers = require('./routes/beers');
const favorites = require('./routes/favorites');
const ratings = require('./routes/ratings');
const jwt = require('./jwt');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

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
    res.status(401).json({ error: 'invalid token' });
    return;  
  }

  req.userId = payload.id;
  next();
}

app.use('/api/auth', auth);
app.use('/api/favorites', checkAuth, favorites);
app.use('/api/beers', checkAuth, beers);
app.use('/api/ratings', checkAuth, ratings);

module.exports = app;