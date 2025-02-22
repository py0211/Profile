import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import Root from '@/routes/Routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Profile">
      <Root />
    </BrowserRouter>
  </StrictMode>,
)
