// 1. IMPORT YOUR DEPENDENCIES
const express = require('express')
const cors = require("cors")
const app = express()


// 1.5 CONFIGURE YOUR MONGOOSE
require("./config/MongooseConfig");

// 2. CONFIGURE YOUR EXPRESS
app.use(cors()) // ALLOWS FOR REACT/EXPRESS TO COMMUNICATE
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// This is where we import the users routes function from our routes.js file
const productRoutes = require("./routes/ProductRoutes")
productRoutes(app)

//configure your express

// 4. RUN YOUR EXPRESS SERVER
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
