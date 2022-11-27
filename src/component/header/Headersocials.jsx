import React from 'react'
import{BsDribbble, BsGithub, BsLinkedin} from 'react-icons/bs'

const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='blank'><BsLinkedin/></a>
        <a href="https://github.com" target='blank'><BsGithub/></a>
        <a href="https://instagram.com" target='blank'><BsDribbble/></a>
    </div>
  )
}

export default Headersocials
