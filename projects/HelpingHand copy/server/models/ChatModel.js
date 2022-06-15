const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
	createMessage: {
		type: [String],
		// required: [true, 'All Fields are required'],
	},


// for created_at and updated_at
}, {timestamps: true});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;