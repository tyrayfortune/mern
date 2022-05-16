const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		//validations not always needed. could just be name: String for example
		type: String,
		required: [true, 'please enter setup.'],
		minlength: [10, "setup has to be atleast 10 characters"]
	},
	punchline: {
		//validations not always needed. could just be name: String for example
		type: String,
		required: [true, 'please enter punchline.'],
		minlength: [3, "setup has to be atleast 3 characters"]
	}
// for created_at and updated_at
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;