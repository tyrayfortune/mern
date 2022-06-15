import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


const Chatroom = (props) => {

    //DESTRUCT REFRESH FROM PROPS
    const {refreshState, refresh} = props

    //CLIENT CONNECTING TO SOCKET.IO
    const[socket] = useState(io(":7000"))
    const [chatState, setChatState] = useState('')
    const [userName, setUserName] = useState('')
    const [chat, setChat] = useState([])

    useEffect(() => {
        //listening for the socket

        //taking previous chat and adding the newest message to the chat 
        socket.on('output_messages', data =>{
            console.log(data)
            // setChat(data)
        })

    // LISTENING FOR ANY NEW MESSAGE
    socket.on("new_message", newMessage => {
        setChat(prevChat => [newMessage, ...prevChat])
      })

            //for puttingthe name in state
        var promptName = prompt('whats is ya name?')
        setUserName(promptName)

        //HAVE TO SPECIFICALLY DISCONNECT OR WILL CONTINUOUSLY RUN
        return () => socket.disconnect(true)
    }, [refreshState])

    const submitHandler = (e) =>{
        e.preventDefault()
        const createMessage = {
            userName,
            message:chatState
          }
        //to be able to send the user name with messsage
        socket.emit('message', createMessage)
    }

  return (
    
    <div>Chatroom
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e) => setChatState(e.target.value)}   />
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