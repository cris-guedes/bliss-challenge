import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Questions from '@/view/pages/Questions'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions" Component={Questions} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
