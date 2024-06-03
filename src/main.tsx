import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import {GoogleOAuthProvider} from '@react-oauth/google'
import App from './App'
import { google_auth } from './constants/developments'

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <React.StrictMode>
        <GoogleOAuthProvider clientId={google_auth.client_id}>
          <App />
        </GoogleOAuthProvider>
      </React.StrictMode>
    </BrowserRouter>
  )
}
