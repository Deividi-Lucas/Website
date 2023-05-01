import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Project from './pages/project'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
