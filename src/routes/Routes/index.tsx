import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Root'

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default RootRoutes
