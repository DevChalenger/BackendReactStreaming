const express = require("express");
const router = express.Router();

const moviesControl = require("../controllers/movies");

router.get("/info/:id", moviesControl.oneMovie);
router.get("/", moviesControl.allMovies);
router.get("/result", moviesControl.searchMovies);

module.exports = router;
