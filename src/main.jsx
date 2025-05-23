import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes'
import './index.css'  // IMPORTANTE: Tailwind aqui
import { BrowserRouter} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderProvider } from "./context/LoaderContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <LoaderProvider>
          <AppRoutes />
          <ToastContainer />
      </LoaderProvider>
    </React.StrictMode>
  </BrowserRouter>
)
