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

`


export default GlobalStyle