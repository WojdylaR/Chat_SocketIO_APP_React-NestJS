import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000")

function ChatComponent(){
    const toto = <p>yo</p>
    let user:any
    const [chat, setChat] = useState(<div></div>)
    let sendMessage = function(message:any) {
        socket.emit('message', message.value)
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
        return setChat(<div> {chat} <p className="Msg"> {id} : {data}</p></div>)})
    }, )

return(
    
    <div className="ChatComponent">
        <div className="Chat">
            {chat}
        </div>
        <div className="ButtonChat">
            <input type="text" id="message" className="InputChat"/>
            <button className="ButtonSendChat" onClick={() => sendMessage(document.getElementById('message'))}>
                Send
            </button>
        </div>
    </div>
)
}

export default ChatComponent