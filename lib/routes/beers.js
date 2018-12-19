
const router = require('express').Router();
const request = require('superagent');

const BEERS_API = 'https://api.punkapi.com/v2/';

router
  .get('/', (req, res) => {

    // make the request to the api (async)
    request.get(`${BEERS_API}/beers/`)
      // then... send the response via res.json
      .then(response => res.json(response.body));
  })
  .get('/:id', (req, res) => {
    request.get(`${BEERS_API}/beers/${id}`)
      .then(response => res.json(response.body));
  });

module.exports = router;