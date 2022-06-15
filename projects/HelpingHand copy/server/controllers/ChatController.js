const Chat = require("../models/ChatModel");


                // GET ALL
module.exports.findAllMessages = (req, res) => {
  Chat.find()
    .then(messages => res.json( messages ))
    .catch(err => res.json({ message: "you dun messed up A-A-RON!!", err }));
};

                    //CREATE
module.exports.createNewMessage = (req, res) => {
  Chat.create(req.body)
    .then(message => res.json( message ))
    .catch(err => res.status(400).json(err));
};



