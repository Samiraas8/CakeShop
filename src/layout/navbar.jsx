import React from 'react'
import { NavLink } from 'react-router'
import { useCart } from '../context/CartContext'

 function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <div>
      <div className='flex flex-col-3 justify-evenly'>   
        <div className='mt-[50px] flex gap-4'>
        <NavLink to={"facebook"}><i class="fa-brands fa-facebook"></i></NavLink>
        <NavLink to={"instagram"}><i class="fa-brands fa-instagram"></i></NavLink>
        <NavLink to={"twitter"}><i class="fa-brands fa-x-twitter"></i></NavLink>
        </div>
     
      <NavLink to={"/"}><img src="images/logo.png.webp" className="mt-[30px] ml-[450px] mr-[450px]" alt="logo" /></NavLink>
      <NavLink to={"/cart"} className="text-[14px] mt-[53px] relative"><i class="fa-solid fa-cart-shopping">{totalItems > 0 && (
            <span className="absolute -top-3 -right-4 bg-pink-500 font-serif text-white text-[13px] border-none p-[4px] rounded-full ">{totalItems}</span>
          )}</i></NavLink>
      <NavLink to={"/login"} className="text-[16px] mt-[50px] mr-[50px]">Login</NavLink>
      </div>
      
      <div className='container flex justify-center gap-10 mt-[20px]'>
       <NavLink to={"/"} className='text-[16px]'>Home</NavLink>
        <NavLink to={"cakes"} className='text-[16px]'>Cakes</NavLink>
       <NavLink to={"about"} className='text-[16px]'>About</NavLink>
       <NavLink to={"contact"} className='text-[16px]'>Contact</NavLink>
       </div>
     
      </div>
    </>
  )
}
export default Navbar