import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  )
}
