
import React from "react";
import { NavLink } from "react-router-dom";
import AllPro from "../src/server/db.js";

function Product({ pro }) {
  return (
    <div className=" p-4 rounded shadow">
      <NavLink to={`/product/${pro.id}`}>
        <img src={pro.thumbnail} alt={pro.title} className="w-full h-48 object-cover" />
      </NavLink>
      <div className="mt-2">
        <NavLink to={`/product/${pro.id}`}>
          <h4 className="font-semibold">{pro.title}</h4>
        </NavLink>
        <p className="text-white">${pro.price}</p>
       <NavLink to={"/cart"}><button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded cursor-pointer">
          Add to cart
        </button></NavLink> 
      </div>
    </div>
  );
}


function Cakes() {
  return (
    <>
      <div>
        <img
          src="./images/h2_hero1.jpg"
          className="cakes-bg mt-[30px] box-border w-full"
          alt="bg"
        />
        <h2 className="cakes-title text-[65px] font-bold text-center">
          Delicious Cakes
        </h2>
      </div>

      <div className="container">
        <h2 className="text-[40px] text-center p-[40px] products">Products</h2>
        <div className="grid grid-cols-3 gap-5">
          {AllPro.map((pro) => (
            <Product pro={pro} key={pro.id} />
          ))}
        </div>
      </div>
      <div className="container">
        <h2 className="text-[40px] text-center p-[40px] products">Follow us on Instagram</h2>
        <div className="flex justify-center text-amber-300">
           <NavLink to={"/instagram"} className='btn-footer text-[14px] py-4 px-10 border-amber-300'><i class="fa-brands fa-instagram"></i>Cakeshop</NavLink>
        </div>
        <div className="flex gap-5 mt-20">
        <NavLink><img src="./images/instra1.jpg.webp" alt="" /></NavLink>
         <NavLink><img src="./images/instra2.jpg.webp" alt="" /></NavLink>
          <NavLink><img src="./images/instra3.jpg.webp" alt="" /></NavLink>
           <NavLink><img src="./images/instra4.jpg.webp" alt="" /></NavLink>
           </div>
           <div className="flex justify-between  mt-30">
           <img src="./images/logo.png.webp" alt="" />
           <div className='container flex justify-end gap-10 mt-[20px]'>
                  <NavLink to={"/"} className='text-[16px] flex-row'>HOME</NavLink>
                   <NavLink to={"cakes"} className='text-[16px] flex-row '>CAKES</NavLink>
                  <NavLink to={"about"} className='text-[16px] flex-row'>ABOUT</NavLink>
                  <NavLink to={"contact"} className='text-[16px] flex-row'>CONTACT</NavLink>
                  </div>
                  </div>
                   <hr className="border-solid border-0.1 text-gray-400 mt-5"></hr>        
        </div>
    </>
  );
}

export default Cakes;
