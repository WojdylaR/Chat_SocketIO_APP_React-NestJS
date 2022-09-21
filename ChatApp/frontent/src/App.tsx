import React from "react";
import { Route, Routes} from 'react-router-dom'
import Chat from "./pages/Chat";
import GlobalStyle from "./Styles/Global";

function App(){
    return (
        <div>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Chat />} />
            </Routes>
        </div>
    )
}

export default App