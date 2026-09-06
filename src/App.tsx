import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import {Home, About, Services} from './pages/index.ts';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route index element={<Home />} />
        <Route index element={<Home />} />
      </Route>
    </Routes> 
  )
}

export default App
