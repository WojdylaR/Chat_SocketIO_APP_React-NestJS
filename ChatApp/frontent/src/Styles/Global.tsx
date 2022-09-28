import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
.all { 
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    padding:0;
    margin:0;
    position: absolute;
    top:0;
    left:0;

    width: 100%;
    height: 100%;
}

.Login {
    text-align: center;
    color:white;
    vertival-align: center;
    position: relative;
    top: 25%;
    font-size: 150%;
}


.LoginInput {
    position: absolute;
    top: 200%;
    width:100%;
}

.MenuLog {
    position: absolute;
    background-color: #c78686; 
    height: 100%;
    width: 15%;
}

.ChatComponent{
    position: absolute;
    left: 15%;
    height: 100%;
    width: 85%;
}

.ButtonChat {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.InputChat {
    width: 90%;
}

.ButtonSendChat {
    position: absolute;
    width: 10%;

}

.Chat {
    position: absolute
}

.Msgx {
    position: relative;
    background-color: #c78686;
}

`


export default GlobalStyle