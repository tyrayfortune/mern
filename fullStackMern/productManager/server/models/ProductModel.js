const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		//validations not always needed. could just be name: String for example
		type: String,
		// required: [true, 'please enter a title'],
		// minlength: [10, "setup has to be atleast 10 characters"]
	},
    price: {
		//validations not always needed. could just be name: String for example
		type: Number,
		// required: [true, 'please enter a number.'],
	},
	description: {
		//validations not always needed. could just be name: String for example
		type: String,
		// required: [true, 'please enter a description.'],
		// minlength: [3, "setup has to be atleast 3 characters"]
	}

// for created_at and updated_at
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;