import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/OSMS.png'
// import IMG2 from '../../assets/news.png'
// import IMG3 from '../../assets/fake.png'
// import IMG4 from '../../assets/todo.png'
// import IMG5 from '../../assets/bookstore.png'
// import IMG6 from '../../assets/shelter.png'
import IMg from '../../assets/myimg-1.png';



const data = [
  {
    id:1,
    image: IMG1,
    title:'Online Service Management System',
    github:'https://github.com/aamirjawed/OSMS',
    demo:'https://github.com/aamirjawed'
  },

  {
    id:2,
    image:IMg,
    title:'Work is in progress',
    github:'https://github.com/aamirjawed',
    demo:'https://github.com/aamirjawed'
  },

  {
    id:3,
    image:IMg,
    title:'Work is in progress',
    github:'https://github.com/aamirjawed',
    demo:'https://github.com/aamirjawed'
  },

  // {
  //   id:4,
  //   image:IMg,
  //   title:'Work is in progress',
  //   github:'https://github.com/aamirjawed',
  //   demo:'https://github.com/aamirjawed'
  // },

  // {
  //   id:5,
  //   image:IMg,
  //   title:'Work is in progress',
  //   github:'https://github.com/aamirjawed',
  //   demo:'https://github.com/aamirjawed'
  // },

  // {
  //   id:6,
  //   image:IMg,
  //   title:'Work is in progress',
  //   github:'https://github.com/aamirjawed',
  //   demo:'https://github.com/aamirjawed'
  // }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
              </div>
              <div></div>
              </article>
            )
          })
        } 
      </div>
    </section>
  )
}

export default Portfolio