import { Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import Layout from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route index element={<Home />} />
        <Route index element={<Home />} />
        <Route index element={<Home />} />
      </Route>
    </Routes> 
  )
}

export default App
