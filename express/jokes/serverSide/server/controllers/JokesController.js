const Joke = require("../models/JokesModel");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(jokes => res.json({ jokes }))
    .catch(err => res.json({ message: "you dun messed up A-A-RON!!", err }));
};

module.exports.findOneJoke = (req, res) => {
  //whatever you put in route after colon is what you would put, in this case we put id (check routes for route name)
	Joke.findOne({ _id: req.params.id })
		.then(oneJoke=> res.json({ oneJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(joke => res.json({ joke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
  //finds the info  (_id: req.params.id)BEFORE the update(req.body is info you want updated), then sets the new value with (new: true)
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    //dont change .then name from result
    .then(result => res.json({ result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


//give you a random joke 

module.exports.randomJoke = (req, res) => {
  console.log("string")
  Joke.aggregate([{$sample: {size: 1}}])
    .then(jokes => res.json( jokes ))
    .catch(err => res.json({ message: "randomstatement", err }));
};