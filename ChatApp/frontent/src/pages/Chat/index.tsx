import React, { useEffect, useState } from "react"
import ChatComponent from "../../Components/Chat"
import io from "socket.io-client"
import axios from 'axios'
import Login from "../../Components/Login"



const socket = io("http://localhost:3000")

function Chat(){
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
    return (
        localStorage.getItem('login') === "false"? <Login /> :
        <div style={{whiteSpace:"pre-line"}}>
            <input type="text" id="message"/>
            <button onClick={() => sendMessage(document.getElementById('message'))}>Send</button>
            <div >{chat}</div>
        </div>
    )
}

export default Chat 