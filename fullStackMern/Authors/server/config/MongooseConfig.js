const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authors_DB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Established a connection to ${mongoose.connection.name}`))
	.catch(err => console.log("Something went wrong when connecting to the database", err));