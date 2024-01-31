import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import AuthContextProvider from './context/Auth'
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/index.css"
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
)