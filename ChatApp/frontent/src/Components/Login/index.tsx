import axios from "axios";
import React from "react";

function Login(id: any){
    const newUser = () => axios.post('http://127.0.0.1:3000/socket/createuser', {id: id, username: document.getElementById("id")})
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })

    return (
        <div className="Login" id="Login">
            <input placeholder="Username" /><button id="username" onClick={() => newUser()}>New User</button>
        </div>
    )
}

export default Login