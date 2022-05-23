const BeltController = require("../controllers/BeltController");

module.exports = app => {
  // restful routing makes use of same url when possible (works because they have different methods)
  // get all products
  app.get("/api/pirates/", BeltController.findAllPirates);
  //CREATE product
  app.post("/api/pirates/", BeltController.createNewPirate);
  //get one product
  app.get("/api/pirates/:pirate_id", BeltController.findOnePirate);
  // //update one product
  // app.put("/api/authors/:author_id", AuthorController.updateName);
  // delete one product
  app.delete("/api/pirates/:pirate_id", BeltController.deletePirate);
  //test
    // app.get("/api/belts/test", BeltController.test)

};