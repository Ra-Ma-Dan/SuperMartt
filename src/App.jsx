import { useState } from 'react'
import NavBar from './components/navbar'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Shop from './pages/shop'
import Footer from './components/footer'
import ProductPage from './pages/prduct_detail'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/products' element={<ProductPage />}/>
     </Routes>
     <Footer />
    </>
  )
}

export default App
