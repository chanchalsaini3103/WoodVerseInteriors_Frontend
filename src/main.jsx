import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// Load Bootstrap CSS first
import 'bootstrap/dist/css/bootstrap.min.css'

// Then your global styles (can override Bootstrap)
import './index.css'

// Bootstrap JS (for dropdowns/modals if needed)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
