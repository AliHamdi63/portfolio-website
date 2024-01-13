import React from 'react'

import "./footer.css"
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>ALI</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://github.com/AliHamdi63?tab=repositories' target='_blank' className=''><BsLinkedin /></a>
                <a href='https://www.linkedin.com/in/ali-hamdi8/' target='_blank' className=''> <FaGithub /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Ali Hamdi Ali. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer