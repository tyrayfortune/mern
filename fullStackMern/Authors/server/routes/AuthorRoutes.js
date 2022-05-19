const AuthorController = require("../controllers/AuthorController");

module.exports = app => {
  // restful routing makes use of same url when possible (works because they have different methods)
//get all products
  app.get("/api/authors", AuthorController.findAllNames);
  //CREATE product
  app.post("/api/authors", AuthorController.createNewName);
  //get one product
  app.get("/api/authors/:author_id", AuthorController.findOneName);
  //update one product
  app.put("/api/authors/:author_id", AuthorController.updateName);
  // delete one product
  app.delete("/api/authors/:author_id", AuthorController.deleteName);
  // //test
  //   app.get("/api/authors/test", AuthorController.test)

};