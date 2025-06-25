import { useState } from 'react'
import NavBar from './components/navbar'
import Home from './pages/home'
import { Route, Routes, UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from 'react-router-dom'
import About from './pages/About'
import Shop from './pages/shop'
import Footer from './components/footer'
import ProductDeatils from './pages/prduct_detail'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import LogIn from './pages/LogIn'
import { CartProvider } from './context/cart_context'
import Payment from './pages/payment'



function App() {



  return (
    <>
     <CartProvider >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/product/:id' element={<ProductDeatils />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<LogIn />}/>
        <Route path='/payment' element={<Payment />}/>
      </Routes>
      <Footer />
     </CartProvider >
    </>
  )
}

export default App
