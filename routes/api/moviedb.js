const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("config");

// @route   GET api/moviedb/bg
// @desc    get most popular tv-show background from TMDB API
// @access  Public
router.get("/bg", (req, res) => {
  const options = {
    uri: `https://api.themoviedb.org/3/tv/popular?api_key=${config.get(
      "tmdbKey"
    )}`,
    method: "GET"
  };

  request(options, (error, response, body) => {
    if (error) {
      return res.status(500).json({ msg: "Server Error" });
    }
    if (response.statusCode !== 200) {
      return res.status(404).json({ msg: "No tv-show bg found" });
    }

    return res.json(JSON.parse(body).results[0].backdrop_path);
  });
});

// @route   POST api/moviedb/search
// @desc    get search results depending on POST query data
// @access  Public
router.post("/search", (req, res) => {
  const options = {
    uri: `https://api.themoviedb.org/3/search/tv?api_key=${config.get(
      "tmdbKey"
    )}&language=en-US&page=1&query=${req.body.query}`,
    method: "GET"
  };
  request(options, (error, response, body) => {
    if (error) {
      return res.status(500).json({ msg: "Server Error" });
    }
    if (response.statusCode !== 200) {
      return res.status(404).json({ msg: "No tv-show found" });
    }
    return res.json(
      JSON.parse(body)
        .results.slice(0, 4)
        .map(result => ({
          id: result.id,
          name: result.name,
          date: result.first_air_date.substring(0, 4),
          overview: result.overview,
          poster:
            result.poster_path !== null
              ? `http://image.tmdb.org/t/p/w92/${result.poster_path}`
              : "http://via.placeholder.com/100",
          vote: result.vote_average.toFixed(1)
        }))
    );
  });
});

module.exports = router;
