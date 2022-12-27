import React from 'react'
import './footer.css'
import {BsLinkedin, BsStackOverflow} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {SiYoutube} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo' style={{color:'white'}}>SAURABH SRIVASTAVA</a>
        <ul className="permalinks">

          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#services">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/saurabh-srivastava-714818202/"><BsLinkedin /></a>
          <a href="https://www.instagram.com/saurabh.js_/"><FiInstagram /></a>
          <a href="https://twitter.com/Saurabh_6_7_0"><IoLogoTwitter /></a>
          <a href="https://stackoverflow.com/users/19909527/saurabh-srivastava-06"><BsStackOverflow/></a>
          {/* <a href="https://www.youtube.com/channel/UCStJJmtgJnLoTKBRi9cOQSg"><SiYoutube /></a> */}
        </div>

    <div className="footer__copyright">
      <small>&copy; Saurabh Srivastava All rights reserved.</small>
    </div>

    </footer>
  )   
}

export default Footer