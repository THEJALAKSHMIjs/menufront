import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import Item from './pages/Item'
import AddProduct from './pages/AddProduct'
import Update from './pages/update'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/reservation' element={<Reservation/>} />
      <Route path='/item' element={<Item/>} />
      <Route path='/addproduct' element={<AddProduct/>} />
      <Route path='/update' element={<Update/>} />
     </Routes>
    </>
  )
}

export default App
