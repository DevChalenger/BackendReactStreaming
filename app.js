const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const moviesRoutes = require("./routes/movies");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://MoviesAdmin:MoviesPassword@cluster0.yklll.mongodb.net/MoviesList?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use("/api/movies", moviesRoutes);

module.exports = app;
