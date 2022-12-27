import React from 'react'
import './about.css'
import ME2 from '../../assests/self2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME2} alt="About image" />
        </div>
      </div>


      <div className="about__content">
        <div className="about__cards">
         
         
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>6+ months Working</small>
          </article>
         
         
          <article className="about__card">
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>10 Clients Worldwide</small>
          </article>
         
         
          <article className="about__card">
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>20+ Completed Project</small>
          </article>
        </div>
        <p>
           Hello! My name is Saurabh Srivastava and I am a frontend developer with a passion for creating visually stunning and user-friendly web applications. With 6 months of experience in the industry, I have a strong foundation in HTML, CSS, JavaScript, and react and am always looking to expand my skillset and stay up-to-date with the latest technologies.  </p>
        <a href="#contact" className='btn btn-primary'>Let's Talks</a>
        
      </div>
        </div>
    </section>
  )
}

export default About
