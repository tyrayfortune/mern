const JokesController = require("../controllers/JokesController");

module.exports = app => {
  //restful routing makes use of same url when possible (works because they have different methods)
  app.get("/api/jokes/random/joke", JokesController.randomJoke);
  app.get("/api/jokes/", JokesController.findAllJokes);
  app.post("/api/jokes/", JokesController.createNewJoke);
  app.get("/api/jokes/:id", JokesController.findOneJoke);
  app.put("/api/jokes/:id", JokesController.updateJoke);
  app.delete("/api/jokes/:id", JokesController.deleteJoke);
  //gives you one random joke

};