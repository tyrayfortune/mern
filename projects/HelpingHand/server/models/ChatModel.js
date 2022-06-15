const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
	createMessage: {
		//storing as an array of objects
		type: Array,
		required: true
	},


// for created_at and updated_at
}, {timestamps: true});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;