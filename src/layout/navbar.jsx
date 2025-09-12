import React from 'react'
import { NavLink } from 'react-router'

 function Navbar() {
  return (
    <>
      <div>
      <div className='flex flex-col-4 justify-evenly'>   
        <div className='mt-[50px] flex gap-4'>
        <NavLink to={"facebook"}><i class="fa-brands fa-facebook"></i></NavLink>
        <NavLink to={"instagram"}><i class="fa-brands fa-instagram"></i></NavLink>
        <NavLink to={"twitter"}><i class="fa-brands fa-x-twitter"></i></NavLink>
        </div>
     
      <NavLink to={"/"}><img src="images/logo.png.webp" className="mt-[30px] ml-[450px] mr-[450px]" alt="logo" /></NavLink>
      <NavLink to={"/login"} className="text-[16px] mt-[50px]">Login</NavLink>
      </div>
      <div className='container flex justify-center gap-10 mt-[20px]'>
       <NavLink to={"/"} className='text-[16px] flex-row'>Home</NavLink>
        <NavLink to={"cakes"} className='text-[16px] flex-row ' >Cakes</NavLink>
       <NavLink to={"about"} className='text-[16px] flex-row'>About</NavLink>
       <NavLink to={"contact"} className='text-[16px] flex-row'>Contact</NavLink>
       </div>
      </div>
    </>
  )
}
export default Navbar