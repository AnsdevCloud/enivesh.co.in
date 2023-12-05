import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Global from './styledcomponents/GlobleStyled.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Global />
    <App />
  </BrowserRouter>,
)
