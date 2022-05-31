const mongoose = require("mongoose");

const SandwichSchema = new mongoose.Schema({

    //SANDWICH GENERAL
	sandwichSize: {
		type: String,
	},
	method: {
		type: String,
	},
	breadType: {
		type: String,
	},
	quantity: {
		type: Number,
	},
    //MEATS
	ham: {
		type: Boolean,
	},
	turkey: {
		type: Boolean,
	},
	roastBeef: {
		type: Boolean,
	},
	pastrami: {
		type: Boolean,
	},
	meatballs: {
		type: Boolean,
	},
    //CHEESES
	americanSwiss: {
		type: Boolean,
	},	
    pepperJack: {
		type: Boolean,
	},	
    sharpChedder: {
		type: Boolean,
	},
    lowFatAmerican: {
		type: Boolean,
	},	
    dairyFreeSwiss: {
		type: Boolean,
	},
    //TOPPINGS
    lettuce: {
		type: Boolean,
	},
    tomatoe: {
		type: Boolean,
	},
    onion: {
		type: Boolean,
	},
    cucumber: {
		type: Boolean,
	},
    jalapeno: {
		type: Boolean,
	},
    //CONDIMENTS
    mustard: {
		type: Boolean,
	},
    mayo: {
		type: Boolean,
	},
    groundPepper: {
		type: Boolean,
	},
    chipotle: {
		type: Boolean,
	},
    pesto: {
		type: Boolean,
	},
    
    allToppings: {
        type: [String]
    }

// for created_at and updated_at
}, {timestamps: true});

const Sandwich = mongoose.model("Sandwich", SandwichSchema);

module.exports = Sandwich;