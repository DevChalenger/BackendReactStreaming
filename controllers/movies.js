const Movies = require("../models/movies");
exports.oneMovie = (req, res, next) => {
  Movies.findOne({ _id: req.params.id })
    .then((movie) => res.status(200).json(movie))
    .catch((error) => res.status(404).json({ error }));
};

exports.allMovies = (req, res, next) => {
  Movies.find({}, { synopsis: 0, trailer: 0 })
    .then((movies) => res.status(200).json(movies))
    .catch((error) => res.status(400).json({ error }));
};
exports.searchMovies = (req, res, next) => {
  Movies.find(
    {
      title: { $regex: req.query.search, $options: "i" },
    },
    { synopsis: 0, trailer: 0 }
  )
    .sort({ title: 1 })
    .limit(30)
    .then((movies) => res.status(200).json(movies))
    .catch((error) => res.status(400).json({ error }));
};
