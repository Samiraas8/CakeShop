import React from 'react'
import { NavLink } from 'react-router'

 function About() {
  return (
    <>
      <div>
        <img
          src="./images/h2_hero1.jpg"
          className="cakes-bg mt-[30px] box-border w-full" alt="bg"
        />
        <h2 className="cakes-title text-[65px] font-light text-center">
         About Us
        </h2>
      </div>
      <div className="container">
        <h2 className="text-[40px] text-center font-light pt-[100px] pb-[100px] mx-[200px] products">This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.</h2>
        <div className="flex cols-6 ">
          <div className='box-border'>
          <h4 className='text-[24px] pr-[180px] font-light text-amber-300 products'>This is Schilers. Awesome Food Theme.Purchase it and eat Burgers.</h4>
          <p className='pt-[20px] pr-[100px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
          <p className='pt-[20px] pr-[100px] font-light'>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
        </div>
        <img src="./images/about1.jpg.webp" alt="about image" className=' box-border'/>
        </div>
           </div>
        <div className='container pt-[100px] '>
          <img src="./images/Artboard 33eat9.jpg" alt="video" className='video-bg relative w-[1080px] h-[640px]'/>
          <span><i class="fa-solid fa-circle-play" className="absolute"></i></span>
           <NavLink to={"https://www.youtube.com/watch?v=3VlI4unScwg"}></NavLink>
       
     
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
  )
}
export default About