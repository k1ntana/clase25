import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./index.js"
import { GlobalContextProvider } from './Context/GlobalContext.jsx'
createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
</BrowserRouter>
)
