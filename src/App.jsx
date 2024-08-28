import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Cart, Home, Detail, Login, NewProduct, NotFound, Review } from './index.js'


function App() {

  return (
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:product_id' element={<Detail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/new' element={<NewProduct/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/reviews' element={<Review/>}/>
      </Routes>

  )
}

export default App
