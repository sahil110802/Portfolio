import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="Card">
      <h2>imsahilsahu11@gmail.com</h2>
      <a href="mailto:imsahilsahu11@gmail.com" target="_blank" className='btn-primary'>Send Email</a>
      </div>
      <div className='socials'>
        <a href="https://www.linkedin.com/in/sahil-sahu-542a55240/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/sahil110802" target='_blank'><BsGithub/></a>
        <a href="https://wa.me/916269625373" target='_blank'><BsWhatsapp/></a>
    </div>
    </section>
  )
}

export default Contact