import React from 'react'
import { NavLink } from 'react-router'

 function Navbar() {
  return (
    <>
      <NavLink to={"/"}><img src="images/logo.png.webp"  alt="logo" /></NavLink>
  
       <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"cakes"}>Cakes</NavLink>
       <NavLink to={"about"}>About</NavLink>
       <NavLink to={"contact"}>Contact</NavLink>
    </>
  )
}
export default Navbar