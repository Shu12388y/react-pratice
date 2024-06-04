import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './context/counterContext.jsx'

// wrapping the Context Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
    <App />
    </CounterProvider>
  </React.StrictMode>,
)
