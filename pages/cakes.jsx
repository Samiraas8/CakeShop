
import React from "react";
import { NavLink } from "react-router-dom";
import Products from "../src/data/db.json"
import Productss from "../src/components/productss";
import FilteredProducts from "../src/components/FilteredProducts";



function Cakes() {
  
  return (
    <>
      <div className="xl lg md sm">
        <img src="/images/h2_hero1.jpg" className="cakes-bg mt-[30px] box-border w-full" alt="bg"/>
        <h2 className="cakes-title text-[65px] font-light text-center">
          Delicious Cakes
        </h2>
      </div>

      <div className="container">
        <h2 className="text-[40px] text-center p-[40px] products">Products</h2>
        <FilteredProducts/>
        <div className="flex-row grid grid-cols-3 gap-6 box-border">
       
        </div>
        
      </div>
      <div className="container">
        <h2 className="text-[40px] text-center p-[40px] products">Follow us on Instagram</h2>
        <div className="flex justify-center text-amber-300">
           <NavLink to={"/instagram"} className='btn-footer text-[14px] py-4 px-10 border-amber-300'><i class="fa-brands fa-instagram"></i>Cakeshop</NavLink>
        </div>
        <div className="flex gap-5 mt-20">
        <NavLink><img src="/images/instra1.jpg.webp" alt="" /></NavLink>
         <NavLink><img src="/images/instra2.jpg.webp" alt="" /></NavLink>
          <NavLink><img src="/images/instra3.jpg.webp" alt="" /></NavLink>
           <NavLink><img src="/images/instra4.jpg.webp" alt="" /></NavLink>
           </div>
           <div className="flex justify-between  mt-30">
           <img src="./images/logo.png.webp" alt="" />
           <div className='container flex justify-end gap-10 mt-[20px]'>
                  <NavLink to={"/"} className='text-[16px] flex-row'>HOME</NavLink>
                   <NavLink to={"/cakes"} className='text-[16px] flex-row '>CAKES</NavLink>
                  <NavLink to={"/about"} className='text-[16px] flex-row'>ABOUT</NavLink>
                  <NavLink to={"/contact"} className='text-[16px] flex-row'>CONTACT</NavLink>
                  </div>
                  </div>
                   <hr className="border-solid border-0.1 text-gray-400 mt-5"></hr>        
        </div>
      
      
    </>
  );
}

export default Cakes;
