import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Header__Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sahil-sahu-542a55240/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/sahil110802" target='_blank'><BsGithub/></a>
        <a href="https://wa.me/916269625373" target='_blank'><BsWhatsapp/></a>
    </div>
  )
}

export default Header__Socials