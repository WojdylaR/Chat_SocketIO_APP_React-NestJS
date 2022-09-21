import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000")

function ChatComponent(){
    let user:any
    const [chat, setChat] = useState("chat :")
    let sendMessage = function(message:any) {
        console.log('send a msg : ' + message.value)
        socket.emit('message', message.value, "otot")
        console.log("message send")
    }
    socket.on('connect', () => console.log('connected'))
    useEffect(() => {socket.on('message', function(id, data){
        user = axios.post('http://127.0.0.1:3000/socket/getusername', {
            id: id
        })
        .then(function(response) {
            user = response.data.username
        })
        .catch(function(error){
            console.log(error)
        });
        return setChat(chat + '\n' + id + " message: " + data)})
    }, )
return(
    
    <div className="ChatComponent">
        <input type="text" id="message"/>
        <button onClick={() => sendMessage(document.getElementById('message'))}>
            Send
        </button>
        <div >
            {chat}
        </div>
    </div>
)
}

export default ChatComponent