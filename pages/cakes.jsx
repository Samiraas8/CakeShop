import React from 'react'
import { NavLink } from 'react-router'


 function Cakes() {
  return (
    <>
    <div>
      <img src="./images/h2_hero1.jpg" className='cakes-bg mt-[30px] box-border w-full' alt="bg image" />
    <h2 className='cakes-title text-[65px] font-600'>Delicious Cakes</h2>
    </div>
    <div className='container'>
      <h2 className='text-[30px] text-center p-[30px]'>Products</h2>
      <div className='grid grid-cols-3 grid-rows-3 gap-5'>
     <NavLink><img src="./images/items1.jpg.webp" alt="" /></NavLink>
      <NavLink><img src="./images/items2.jpg.webp" alt="" /></NavLink>
       <NavLink><img src="./images/items3.jpg.webp" alt="" /></NavLink>
        <NavLink><img src="./images/items4.jpg.webp" alt="" /></NavLink>
         <NavLink><img src="./images/items5.jpg.webp" alt="" /></NavLink>
          <NavLink><img src="./images/items6.jpg.webp" alt="" /></NavLink>
    
    </div>
    </div>
    </>
  )
}
export default Cakes