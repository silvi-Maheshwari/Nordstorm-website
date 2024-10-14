import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import New from './components/New'

import Clearance from './components/Clearance'
import Women from './components/Women'
import Men from './components/Men'
import Kids from './components/Kids'
import Shoes from './components/Shoes'
import Gift from './components/Gift'
import Beauty from './components/Beauty'
import Flash from './components/Flash'
import Navbar from './components/Navbar'
import Sign from './components/Sign'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer'
import BeautyDetails from './components/BeautyDetails'
import Cart from './components/Cart'
import Home from './components/Home'
import Product from './components/Product'



function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/new' element={<New/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/clearance' element={<Clearance/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/shoes' element={<Shoes/>}/>
        <Route path='/gift' element={<Gift/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/flash' element={<Flash/>}/>
        <Route path='/signin' element={<Sign/>}/>
        <Route path='/beauty/:id' element={<BeautyDetails/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='product/:id' element={<Product/>}/>
      </Routes>
      <Footer/>
    </>

  )
}

export default App
