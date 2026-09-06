import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import {Home, About, Services, Agenda, Pictures} from './pages/index.ts';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/agenda' element={<Agenda />} />
        <Route path='/pictures' element={<Pictures />} />
      </Route>
    </Routes> 
  )
}

export default App
