import React from 'react'
import './nav.css'
import { useState } from "react";
import s from "../assets/CV.pdf";

const Nav = () => {
  const [activeNav,setactiveNav]=useState('#');
  return (
    <nav >
      <div className="nav1">
      <a href="#" onClick={()=>setactiveNav("#")} className={activeNav==="#"?'active':''}>Home</a>
      <a href="#about" onClick={()=>setactiveNav("#about")} className={activeNav==="#about"?'active':''}>About</a>
      <a href="#portfolio" onClick={()=>setactiveNav("#portfolio")} className={activeNav==="#portfolio"?'active':''}>Portfolio</a>
      <a href="#contact" onClick={()=>setactiveNav("#contact")} className={activeNav==="#contact"?'active':''}>Contact</a>
      </div>
      <div className="nav2">
      <a href={s} download className='btn'>Resume</a>
      </div>
    </nav>
  )
}

export default Nav