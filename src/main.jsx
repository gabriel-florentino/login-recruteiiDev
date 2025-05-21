import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes'
import './index.css'  // IMPORTANTE: Tailwind aqui
import { BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
          <AppRoutes />
    </React.StrictMode>
  </BrowserRouter>
)
