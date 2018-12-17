
const router = require('express').Router();
const request = require('superagent');

const BEERS_API = 'https://api.punkapi.com/v2/';

router
  .get('/', (req, res) => {

    // make the request to the api (async)
    request.get(`${BEERS_API}/beers/`)
      // then... send the response via res.json
      .then(response => {
        // superagent makes the response body available as "result.body"
        // we can transform/reshape the data as we want
        const beers = response.body.results.map(rest => {
          return {
            name: rest.name,
            tagline: rest.tagline,
            abv: rest.abv
          };
        });

        res.json(beers);
      });

  });

module.exports = router;