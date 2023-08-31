const express = require("express");
const { connectToDb, getDb } = require("./database");
// imported two functions from db file
// will eventually need to get ObjectId from mongodb

//init app and middleware - remember to add cors!!
const app = express();
app.use(express.json());

// connect to mongodb server
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("app is listening on port 3000");
    });
    db = getDb();
  }
});

// routes
app.get("/movies", (req, res) => {
  let movies = [];
  db.collection("Movie-app")
    .find()
    .sort({ title: 1 })
    .forEach((movie) => movies.push(movie))
    .then(() => {
      res.status(200).json(movies);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not retrieve object" });
    });
});
