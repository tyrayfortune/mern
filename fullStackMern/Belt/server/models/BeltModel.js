const mongoose = require("mongoose");

const BeltSchema = new mongoose.Schema({
	pirateName: {
		//validations not always needed. could just be name: String for example
		type: String,
		required: [true, 'All Fields are required'],
	},
	imageURL: {
		//validations not always needed. could just be name: String for example
		type: String,
		required: [true, 'All Fields are required'],
	},
	treasureChests: {
		//validations not always needed. could just be name: String for example
		type: Number,
		required: [true, 'All Fields are required'],
	},
	pirateCatchPhrase: {
		//validations not always needed. could just be name: String for example
		type: String,
		required: [true, 'All Fields are required'],
	},
	crewPosition: {
		//validations not always needed. could just be name: String for example
		type: String,
		required: [true, 'All Fields are required'],
	},
	pegLeg: {
		//validations not always needed. could just be name: String for example
		type: String,
	},
	eyePatch: {
		//validations not always needed. could just be name: String for example
		type: String,
	},
	hookHand: {
		//validations not always needed. could just be name: String for example
		type: String,
	},

// for created_at and updated_at
}, {timestamps: true});

const Belt = mongoose.model("Belt", BeltSchema);

module.exports = Belt;