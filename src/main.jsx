import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/GlobalStyles.css'
import { RouterProvider } from 'react-router'
import router from './routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
