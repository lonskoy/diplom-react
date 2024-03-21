import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Index from '../pages/Index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <React.StrictMode><Index /></React.StrictMode>
  </BrowserRouter>
)
