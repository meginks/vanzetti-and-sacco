// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './ErrorPage'
import About from './routes/About'
import Landing from './routes/Landing' 
import LettersHome from './routes/LettersHome' 
import ResourcesHome from './routes/ResourcesHome' 
import SaccoVanzettiLibrary from './routes/SaccoVanzettiLibrary'
import './index.css'


console.log('React available:', !!React);
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Landing />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'letters',
        element: <LettersHome />
      }, 
      {
        path: 'library',
        element: <SaccoVanzettiLibrary />
      }, 
      {
        path: 'resources',
        element: <ResourcesHome />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)