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
        <div className="flex cols-6 gap-5">
          <div>
          <h4 className='text-[24px] pr-[160px] font-light text-amber-300 products'>This is Schilers. Awesome Food Theme.Purchase it and eat Burgers.</h4>
          <p className='pt-[20px] pr-[100px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
          <p className='pt-[20px] pr-[100px] font-light'>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
        </div>
        <img src="./images/about1.jpg.webp" alt="about image" />
        </div>
        <div className='container'>
          <NavLink to={"https://preview.colorlib.com/theme/cakeshop/about.html"}><video src="./images/video-bg.jpg" className=''></video></NavLink>
         
        </div>
      </div>
       <hr className="border-solid border-0.1 text-gray-400 mt-5"></hr>  
    </>
  )
}
export default About