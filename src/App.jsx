import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Shop from './pages/Shop'
import About from './pages/About'
import Sell from './pages/Sell'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import TOF from './pages/TOF'
import './App.css'

function App() {
  return (
    <div className='font-[GothamPro]'>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='Browse' element={<Browse />} />
        <Route exact path='Shop' element={<Shop />} />
        <Route exact path='About' element={<About />} />
        <Route exact path='Sell' element={<Sell />} />
        <Route exact path='Contact' element={<Contact />} />
        <Route exact path='termsofservice' element={<TOF />} />
      </Routes>
    </div>
  )
}

export default App
