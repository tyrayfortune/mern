// 1. IMPORT DEPENDENCIES
const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const app = express()
const port = 8000
const server =7000
const Chat = require("./models/ChatModel")
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
const chat_history = []
//on is an event listner for any client connects to sockets, this is the callback function
io.on("connection", (socket) =>{
    //send chat history to the new user
    Chat.find().then(result=>{
        socket.emit('output_messages', result )
    })
    
    //listener event from you client chatroom, has to match
    socket.on("message", createMessage => {
        //from model to save in DB
        const chat_message = new Chat({createMessage})
        chat_message.save().then(()=>{
            //sending message to everyone whose connected
            io.emit("message", createMessage)

        })
        // //for chat history for new user
        //         chat_message.push(createMessage)
        // //send message out to rest of users
        //         socket.broadcast.emit("new_message", createMessage)
    })
})