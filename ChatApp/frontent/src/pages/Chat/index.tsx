import React, { useEffect, useState } from "react"
import ChatComponent from "../../Components/ChatComponent"
import io from "socket.io-client"
import axios from 'axios'
import Login from "../../Components/Login"
import GlobalStyle from "../../Styles/Global"
import MenuLog from "../../Components/MenuLog"





function Chat(){
    return (
        
        localStorage.getItem('login') === "false"? <Login /> :
        <div style={{whiteSpace:"pre-line"}}>
            <MenuLog />
            <ChatComponent />
        </div>
    )
}

export default Chat 