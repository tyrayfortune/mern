const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name: {
		//validations not always needed. could just be name: String for example
		type: String,
		required: [true, 'please enter a name'],
		minlength: [3, "name has to be atleast 3 characters"]
	},

// for created_at and updated_at
}, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;