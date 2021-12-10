  const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/', (req, res) => {
//   // Add query to get all genres
//   res.sendStatus(500)
// });


router.get('/', (req, res) => {
// router.get('/:movieid', (req, res) => {

  const queryText = `SELECT genres.name, movies.title FROM movies
                    JOIN movies_genres ON movies.id=movies_genres.movie_id
                    JOIN genres ON movies_genres.genre_id=genres.id
                    WHERE movies.id=$1;`;
  // pool.query(queryText, [req.params.movieid])
  pool.query(queryText, [req.query.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
console.log('grabbing req.params----->', req.params);
console.log('grabbing req.query----->', req.query);
});

module.exports = router;