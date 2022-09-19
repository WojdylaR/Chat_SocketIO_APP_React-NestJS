import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Chat from './pages/Chat'
import { Route, Routes } from 'react-router-dom';

localStorage.setItem('login', "false")

ReactDOM.render(
    <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Chat />} />
          </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)