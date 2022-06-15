import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chatroom = () => {
    //CLIENT CONNECTING TO SOCKET.IO
    const[socket] = useState(io(":7000"))
    const [state, setState] = useState('')
    const [name, setName] = useState('')
    const [chat, setChat] = useState([])

    useEffect(() => {
        //listening for the socket
        socket.on("chat_history", data => {
            setChat(data)
        })

        //taking previous chat and adding the newest message to the chat 
        socket.on('new_message', newMessage =>{
            setChat(prevChat => [...prevChat, newMessage])
        })

        var promptName = prompt('whats is ya name?')
        setName(promptName)

        //have to specifically disconnect or will continuously run
        return () => socket.disconnect(true)
    }, [])

    const submitHandler = (e) =>{
        e.preventDefault()
        //to be able to send the user name with messsage
        const payload = {
            name, 
            message:state
        }
        //first argument is key name u want to send it as, second is state to show whatever is inside of your input currently
        socket.emit('message', payload)
    }

  return (
    
    <div>Chatroom
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setState(e.target.value)}  />
            <button type="submit">Send</button>
        </form>
        {
            chat.map(msgObj => {
                return(
                    <div>
                        <p>{msgObj.message}</p>
                        <p>by {msgObj.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Chatroom