import React from 'react'
import CTA from './CTA'
import ME from "../assets/me.png"
import Header__Socials from "./Header__Socials";
import './header.css'
const Header = () => {
  return (
    <header>
      
      <div className="container container__header">
      <h5>Hello I'm</h5>
        <h1>Sahil Sahu</h1>
        <h5 className='text-light'>I design and code web, desktop and mobile applications and also do competitive coding.</h5>
        <CTA/>
        <Header__Socials/>
      </div>
    </header>
  )
}

export default Header