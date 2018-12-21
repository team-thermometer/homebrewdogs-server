
const router = require('express').Router();
const request = require('superagent');

const BEERS_API = 'https://api.punkapi.com/v2/';

router
  .get('/', (req, res) => {

    request.get(`${BEERS_API}/beers/`)
      .then(response => res.json(response.body));
  })
  .get('/:id', (req, res) => {
    const id = req.params.id;
    request.get(`${BEERS_API}/beers/${id}`)
      .then(response => res.json(response.body));
  });

module.exports = router;