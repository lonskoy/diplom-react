import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Index from '../pages/Index'
import { store } from '../store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Index />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>


)
