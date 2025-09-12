import React from 'react'
import { NavLink } from 'react-router'

function Footer() {
  return (
    <>
    <div className='container flex flex-row gap-10'>
      <div className='flex-col mr-[65px] py-[50px] pr-[30px] box-border '>
        <p className='leading-loose'>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     <div className='mt-[50px] flex gap-4 box-border'>
        <NavLink to={"/instagram"} className='btn-footer text-[14px] py-4 px-10 '><i class="fa-brands fa-instagram"></i>Instagram</NavLink>
        <NavLink to={"/facebook"} className='btn-footer text-[14px] py-4 px-10 '><i class="fa-brands fa-facebook"></i>Facebook</NavLink>
        <NavLink to={"/twitter"} className='btn-footer text-[14px] py-4 px-10 '><i class="fa-brands fa-x-twitter"></i>Twitter</NavLink>
        </div>
      </div>
      <div className='flex-col p-[50px] box-border'>
        <span><i class="fa-solid fa-location-arrow"></i></span>
        <h4 className='text-amber-300 py-2 font-thin text-[24px]'>Location</h4>
        <p>4736 Poe Lane, HOT SPRINGS, Montana-59845</p>
      </div>
      <div className='flex-col justify-end p-[50px]'>
        <span><i class="fa-solid fa-phone"></i></span>
        <h4 className='text-amber-300 py-2 font-thin text-[24px]'>Contact</h4>
        <NavLink to={"call"}>913-473-7000</NavLink>
        <p>contact@cakeshop.com</p>
      </div>
       
      </div>
      <div className='container'>
       <hr className="border-solid border-0.1 text-gray-400 mt-5"></hr>
       <p className='m-[30px] text-center'>Copyright ©2025 All rights reserved | This template is made with  by <NavLink to={"https://colorlib.com/"} className="text-amber-300">Colorlib</NavLink></p>
      </div>
    </>
  )
}
export default Footer