
// import { NavLink } from 'react-router-dom'
// import { useCart } from '../context/CartContext'
// import { useAuth } from '../context/AuthContext';
// import React, {useState} from 'react';

//  function Navbar() {
//   const { cart } = useCart();
//     const { cartCount } = useCart();
  
//   const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const { user, logout } = useAuth();
//     const [open, setOpen] = useState(false);
//   return (
//     <>
//       <div>
//       <div className='flex flex-col-3 justify-evenly'>   
//         <div className='mt-[50px] flex gap-4'>
//         <NavLink to={"facebook"}><i class="fa-brands fa-facebook"></i></NavLink>
//         <NavLink to={"instagram"}><i class="fa-brands fa-instagram"></i></NavLink>
//         </div>
     
//       <NavLink to={"/"}><img src="images/logo.png.webp" className="mt-[30px] ml-[450px] mr-[450px]" alt="logo" /></NavLink>
//       <NavLink to={"/cart"} className="text-[14px] mt-[53px] relative"><i class="fa-solid fa-cart-shopping">{cartCount > 0 && (
//             <span className="absolute -top-3 -right-4 bg-pink-500 font-serif text-white text-[13px] border-none p-[4px] rounded-full ">{cartCount}</span>
//           )}</i></NavLink>
     
     
     
//       <div className="flex mt-[50px] gap-4">
//         {user ? (
//           <div
//             className="relative"
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//           >
//             <span className="cursor-pointer font-semibold text-pink-600">
//               {user.name}
//             </span>

//             {/* Popup menyu */}
//             {open && (
//               <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
//                 <ul className="flex flex-col ">
//                   <li
//                     onClick={logout}
//                     className="logout-button px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
//                   >
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         ) : (
//           <>
//             <NavLink to="/login">Login</NavLink>
//             <NavLink to="/register">Register</NavLink>
//           </>
//         )}
//       </div>
   
//       </div>
      
//       <div className='container flex justify-center gap-10 mt-[20px]'>
//        <NavLink to={"/"} className='text-[16px]'>Home</NavLink>
//         <NavLink to={"cakes"} className='text-[16px]'>Cakes</NavLink>
//        <NavLink to={"about"} className='text-[16px]'>About</NavLink>
//        <NavLink to={"contact"} className='text-[16px]'>Contact</NavLink>
//        </div>
//       </div>
//       </> 
//   )
// }
// export default Navbar

import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";

function Navbar() {
  const { cartCount } = useCart(); // yalnız cartCount götürürük
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div className="flex flex-col-3 justify-evenly">
          {/* Sosial media iconları */}
          <div className="mt-[50px] flex gap-4">
            <NavLink to={"facebook"}>
              <i className="fa-brands fa-facebook"></i>
            </NavLink>
            <NavLink to={"instagram"}>
              <i className="fa-brands fa-instagram"></i>
            </NavLink>
          </div>

          {/* Logo */}
          <NavLink to={"/"}>
            <img
              src="images/logo.png.webp"
              className="mt-[30px] ml-[450px] mr-[450px]"
              alt="logo"
            />
          </NavLink>

          {/* Cart icon + badge */}
          <NavLink to={"/cart"} className="text-[14px] mt-[53px] relative">
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-4 bg-pink-500 font-serif text-white text-[13px] border-none px-[6px] py-[2px] rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* User menyusu */}
          <div className="flex mt-[50px] gap-4">
            {user ? (
              <div
                className="relative"
                onClick={() => setOpen(!open)} // 👈 kliklə açılır
              >
                <span className="cursor-pointer font-semibold text-pink-600">
                  {user.name}
                </span>

                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                    <ul className="flex flex-col">
                      <li
                        onClick={logout}
                        className="logout-button px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </div>
        </div>

        {/* Naviqasiya menyusu */}
        <div className="container flex justify-center gap-10 mt-[20px]">
          <NavLink to={"/"} className="text-[16px]">
            Home
          </NavLink>
          <NavLink to={"cakes"} className="text-[16px]">
            Cakes
          </NavLink>
          <NavLink to={"about"} className="text-[16px]">
            About
          </NavLink>
          <NavLink to={"contact"} className="text-[16px]">
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;

