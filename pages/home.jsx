
 import { NavLink } from "react-router-dom";
 import React, { useEffect, useState } from "react";
 import Product from "../src/components/product";
 import productsData from "../src/data/db.json";
 import { Navigate } from "react-router-dom";
 import Productss from "../src/components/productss";



 function Home() {
   const [products, setProducts] = useState([])
   useEffect(() => {const saved = localStorage.getItem("products");
    if (saved) {
       setProducts(JSON.parse(saved));
     } else {
      setProducts(productsData.products);
      localStorage.setItem("products", JSON.stringify(productsData.products));
    }
   }, []);

  return (
    <>
      <div className='relative'>
         <img src="/images/Artboard 8eat13.jpg" className="cakes-bg mt-[20px] box-border w-full" alt="bg"/>
         <h1 className="home-title text-[65px] font-light text-center">
          Healthy Made<br/>
          Delicious Cake
          </h1>
          <div>
         <NavLink to="/cakes">
           <button className="order-button">ORDER NOW</button>
         </NavLink>
       </div>
       </div>
      <div className="container">
         <h2 className="text-[40px] text-center font-light pt-[100px] pb-[100px] mx-[200px] products">
           This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
         </h2>
         <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="box-border">
             <h4 className="text-[24px] font-light text-amber-300 products">
               This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
             </h4>
             <p className="pt-[20px] font-light">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor dunt ut labore et dolore magna aliqua.
             </p>
             <p className="pt-[20px] font-light">
               Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore
               et dolore magna aliqua.
             </p>
           </div>
           <img src="/images/about1.jpg.webp" alt="about" className="box-border"/>
         </div>
      </div>

       {/* Products carousel */}
       <div className="container mx-auto py-10">
         <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
         <div className="flex flex-row gap-5">
         <Productss/>
         </div>
          
        
       
 </div>
 <div className='container pt-[100px]'>
         <h4 className='text-[40px] text-center food-lover pb-[50px]'>Food Lover's Say</h4>
         <div className='flex col-4'>
           <div className='border-box border-customer1 p-[30px]'>
             <ul className='star-icon'>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
             </ul>
               <p className='pb-[25px]'>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
             <div className='flex flex-row'>
               <img src="./images/customer1.png.webp" alt="customer1" />
               <p className='pl-[10px] pt-[5px] text-[16px]'>Wilma Mumduya</p>
             </div>
           </div>
         
           <div className='border-box border-customer2 p-[30px]'>
             <ul className='star-icon'>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
            </ul>
               <p className='pb-[25px]'>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
             <div className='flex flex-row'>
               <img src="./images/customer1.png.webp" alt="customer1" />
               <p className='pl-[10px] pt-[5px] text-[16px]'>Wilma Mumduya</p>
             </div>
           </div>

             <div className='border-box border-customer3 p-[30px]'>
             <ul className='star-icon'>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
               <li><i class="fa-solid fa-star"></i></li>
             </ul>
               <p className='pb-[25px]'>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
             <div className='flex flex-row'>
               <img src="./images/customer1.png.webp" alt="customer1" />
               <p className='pl-[10px] pt-[5px] text-[16px]'>Wilma Mumduya</p>
             </div>
           </div>
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
          
            <hr className="border-solid border-0.1 text-gray-400 mt-25"></hr>        
         </div> 
     
   
     </>
  );
 }

 export default Home

