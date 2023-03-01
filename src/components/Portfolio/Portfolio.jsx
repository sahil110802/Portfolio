import React from 'react'
import ME from "../assets/me.png"
import './portfolio.css'
import Data from './Data'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          Data.map(({id,image,title,github,demo})=>{
          return (
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={image}  />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github}>Github</a>
            <a href={demo}>Demo</a>
          </div>
        </article>
          )
          })
          }
      </div>
    </section>
  )
}

export default Portfolio