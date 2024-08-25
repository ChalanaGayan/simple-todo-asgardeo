import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from "@asgardeo/auth-react";
import asgardeoConfig from "./asgardeoConfig";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider config={asgardeoConfig}>
      <App />

    </AuthProvider>
  </StrictMode>,
)
