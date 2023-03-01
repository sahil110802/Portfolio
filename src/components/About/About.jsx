import React from 'react'
import './about.css'
import Skills from './Skills'
const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="AboutBio">
          Hello! My name is
          <strong> Sahil Sahu. </strong>
          I am a mern stack web developer, i like developing web applications and cross platform mobile applications with react native, i am also a competitive coder. I am currently pursuing my btech in cse from
          <strong> IIIT Jabalpur.</strong>
        </div>
        <h3>My Skills</h3>
        <div className="skills">
        {
          Skills.map(({id,image,title})=>{
          return (
          <article key={id} className='skills__item'>
          
          <div className="skills__item-img">
            <img src={image} />
            
          </div>
          <h3>{title}</h3>
          
        </article>
          )
          })
          }
      </div>
      </div>
    </section>
  )
}

export default About