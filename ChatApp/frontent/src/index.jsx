import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Chat from './pages/Chat'
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './Styles/Global'
import App from './App'

localStorage.setItem('login', "false")

ReactDOM.render(
    <React.StrictMode>
        <Router>
          <App />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)