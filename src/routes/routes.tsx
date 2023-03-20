import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Questions from '@/view/pages/Questions'
import Details from '@/view/pages/Details'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/questions" />} />
        <Route path="/questions" Component={Questions} />
        <Route path="/questions/:id" Component={Details} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
