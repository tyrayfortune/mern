import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import App from "../App.css"
import ChatroomNavbar from '../components/ChatroomNavbar';
import axios from "axios";

const SocketComponent = () => {

    // CLIENT CONNECTING TO SOCKET IO
    const [socket] = useState(io(":8000"))
    const [chatInput, setChatInput] = useState('')
    const [name, setName] = useState("")
    const [chat, setChat] = useState([])

    useEffect(() => {
        // LISTENING CHAT HISTORY
        socket.on("chat_history", data => {
        setChat(data)
        })

    // LISTENING FOR ANY NEW MESSAGE
    socket.on("new_message", newMessage => {
        console.log(newMessage)
        setChat(prevChat => [newMessage, ...prevChat])
      })


        var promptName = prompt("What is your name??")
        setName(promptName)

        // DISCONNECT THE SOCKET CONNECTION
        return () => socket.disconnect(true);
    }, [])

    const submitHandler = (e) =>{
        e.preventDefault()
        setChatInput("")
        const payload = {
        name,
        message:chatInput
        }
        socket.emit("send_message",payload)
    }


    return (
    <div className='background-img '>
        {/* <img src="../imgs/hands.png" alt="photo_of_hands" /> */}
        <div className='container'>
            <div >
                <h1 className='header'>C H A T R O O M</h1>
                <ChatroomNavbar/>
            </div>
        <h3 className='text-header'>A pressure free place to connect with strangers.</h3>
        <div className="text-container" >
            {
                chat.map(msgObj => {
                    return(
                        <div>
                <h1>{msgObj.message} : {msgObj.name}</h1>
                
                </div>
                )})
            }
            <div className='chat-line'>
                <form className='chatt' onSubmit={submitHandler}>
                    <input className='chat-box' placeholder='E n t e r      t e x t      h e r e . . . ' onChange={(e) => setChatInput(e.target.value)} value={chatInput}/>
                    <button className='chat-button'type="submit">Send</button>
                </form>
            </div>
        </div>
        
        </div>
    </div>
    )
}

export default SocketComponent