import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import RootRoutes from '@/routes/Routes'

const basename = import.meta.env.VITE_BASENAME || "/";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <RootRoutes />
    </BrowserRouter>
  </StrictMode>,
)
