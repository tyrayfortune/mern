// 1. IMPORT DEPENDENCIES
const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const app = express()
const port = 8000


// 1.5 CONNECT TO MONGODB
require("./config/MongooseConfig")


// 2. CONFIGURE EXPRESS
app.use(cookieParser())
app.use(cors({credentials:true, origin:"http://localhost:3000"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// 3. CONNECT ROUTES
const userRoutes = require("./routes/UserRoutes")
userRoutes(app)

const sandwichRoutes = require("./routes/SandwichRoutes")
sandwichRoutes(app)
// 4. START EXPRESS SERVER
app.listen(port , ()=>{
    console.log(`EXPRESS LISTENING ON ${port}`)
})