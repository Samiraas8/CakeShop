
import React from "react";
import Map from "../src/components/map.jsx";
import { NavLink } from "react-router";

function Contact() {
  return (
    <>
      <div>
        <img
          src="./images/h2_hero1.jpg"
          className="cakes-bg mt-[30px] box-border w-full" alt="bg"
        />
        <h2 className="cakes-title text-[65px] font-light text-center">
         Contact Us
        </h2>
        <div className="mt-[50px]">
       <Map/>
       </div>

       <div className="container pt-[70px]">
       <h5>Get in Touch</h5>
   
    
      <div className="flex row cols-6 gap-4">
        <div className="box-border">
        <form> 
          <textarea name="message" className="border-1 mt-[20px] mb-[20px] p-[10px] text-[12px] w-[800px] h-[200px] text-#e5e6e9" placeholder="Enter Message"></textarea>
          <div className="flex row cols-6 gap-5">
            <input type="text" className="border-1 mt-[10px] mb-[10px] p-[15px] text-[12px] w-[390px] " placeholder="Enter your name"/>
            <input type="text" className="border-1 mt-[10px] mb-[10px] p-[15px] text-[12px] w-[390px] " placeholder="Email"/>
          </div>

          <div>
            <input type="text" className="border-1 mt-[10px] mb-[10px] p-[10px] text-[12px] w-[800px]" placeholder="Enter Subject"/>
          </div>
          <div className="pt-[30px]">
            <button className="send-button px-10 py-5">SEND</button>
          </div>
        </form>
        </div>
        <div className="flex column flex-wrap box-border m-[30px] pb-[120px]">
        <div className="flex column gap-4">
          <span className="pt-[5px]"><i class="fa-solid fa-house"></i></span>
          <div className="">
          <p className="font-light">Baku, Azerbaijan.</p>
          <h3>Rosemead, CA 91770</h3>
          </div>
        </div>
        <div className="flex row gap-4">
          <span className="pt-[5px]"><i class="fa-solid fa-phone"></i></span>
          <div className="">
          <p className="font-light">+ 253 565 2365</p>
          <h3>Mon to Fri 9am to 6pm</h3>
          </div>
        </div>
        <div className="flex row gap-4 ">
          <span className="pt-[5px]"><i class="fa-solid fa-envelope"></i></span>
          <div className="">
          <p className="font-light">support@developersm.com</p>
          <h3>Send us your query anytime!</h3>
          </div>
        </div>
        </div>
      </div>
 </div>
    </div>
    <div className="container">
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

export default Contact