const ChatController = require("../controllers/ChatController");

module.exports = app => {
  // restful routing makes use of same url when possible (works because they have different methods)
  // GET ALL products
  app.get("/api/messages/", ChatController.findAllMessages);
  //CREATE product
  app.post("/api/messages/", ChatController.createNewMessage);
};