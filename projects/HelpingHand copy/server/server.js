// 1. IMPORT DEPENDENCIES
const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const app = express()
const port = 8000
const server =7000

// 1.5 CONNECT TO MONGODB
require("./config/MongooseConfig")


// 2. CONFIGURE EXPRESS
app.use(cookieParser())
// for client and server to speak 
app.use(cors({credentials:true, origin:"http://localhost:3000"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// 3. CONNECT ROUTES
const chatRoutes = require("./routes/ChatRoute")
chatRoutes(app)

// 4. START EXPRESS SERVER
app.listen(port , server, ()=>{
    console.log(`EXPRESS LISTENING ON ${port}, ${server}`)
})

// FOR SOCKET.IO, putting it in the Express
const io = require('socket.io')(server, { cors: true });

//to cache the chat
// import ChatSchema from "./models/ChatModel"
// const chat_history = ChatSchema
const chat_history = []
//on is an event listner for any client connects to sockets, this is the callback function
io.on("connection", socket =>{
    //send chat history to the new user
    socket.emit("chat_history", chat_history)

    //listner event from you client chatroom, has to match
    socket.on("message", data => {
        console.log(data)
        //for chat history for new user
        chat_history.push(data)
        //send message out to rest of users
        socket.broadcast.emit("new_message", data)
        //sending emssage to everyone whose connected
        io.emit("new_message", data)
    })
})