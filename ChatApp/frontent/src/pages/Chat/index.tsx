import React, { useEffect, useState } from "react"
import ChatComponent from "../../Components/Chat"
import io from "socket.io-client"

function Chat(){
    const socket = io("http://localhost:3000")
    const [chat, setChat] = useState("caht :")
    let sendMessage = function(message:any) {
        console.log('send a msg : ' + message.value)
        socket.emit('message', message.value)
        console.log("message send")
    }

    socket.on('connect', () => console.log('connected'))
    
    useEffect(() => {socket.on('message', function(id, data){
        return setChat(chat + '\n' + id + ": " + data)})
        //messages?.innerHTML === messages + `<p> ${id} : ${data} </p>`});
    }, )
    return (
        <div style={{whiteSpace:"pre-line"}}>
            <input type="text" id="message"/>
            <button onClick={() => sendMessage(document.getElementById('message'))}>Send</button>
            <div >{chat}</div>
        </div>
    )
}

export default Chat 