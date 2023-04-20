import './pages/global/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Project from './pages/project'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
