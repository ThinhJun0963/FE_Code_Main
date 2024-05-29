import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { RouterProvider } from 'react-router-dom'
import router from './routing/routes'
import './index.css'

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
  )
}
