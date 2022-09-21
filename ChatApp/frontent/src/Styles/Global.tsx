import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
div {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
}

.Login {
    text-align: center;
    vertival-align: center;

    color: white;
}

.LoginMsg {
    position: relative;
    top: 20%;
    font-size: 200%;
    
}

.LoginInput {
    position: relative;
    top: 50%;
}

`


export default GlobalStyle