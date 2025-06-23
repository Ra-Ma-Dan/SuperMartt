import { useState } from 'react'
import NavBar from './components/navbar'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Shop from './pages/shop'
import Footer from './components/footer'
import ProductDeatils from './pages/prduct_detail'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import LogIn from './pages/LogIn'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductsIndex = prevCart.findIndex(item => item.id === product.id)
      if (existingProductsIndex !== -1){
        const updatesdCart = [...prevCart];
        updatesdCart[existingProductsIndex].quantity += 1;
        return updatesdCart
      } else{
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  return (
    <>
     <NavBar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/shop' element={<Shop onAddToCart={ addToCart } />}/>
      <Route path='/product/:id' element={<ProductDeatils onAddToCart={ addToCart }/>}/>
      <Route path='/cart' element={<Cart cartItems={ cart }/>}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<LogIn />}/>
     </Routes>
     <Footer />
    </>
  )
}

export default App
