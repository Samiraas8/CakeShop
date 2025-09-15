import { useState } from 'react'
import Productss from "./components/productss.jsx";
import Cart from "../pages/cart.jsx";
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Cakes from '../pages/cakes.jsx';


function App() {


  return (
    <>
   <Productss/>
<Routes>
  <Route path="/" element={<Cakes />} />
  <Route path="/cakes" element={<Cakes />} />
  <Route path="/cart" element={<Cart />} />
</Routes>

    </>
  )
}

export default App
