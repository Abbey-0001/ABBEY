import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './style.css'

import Work from './Work'
import Minicalculator from './Minicalculator'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Work /> */}
    <Minicalculator />

  </React.StrictMode>,
)
