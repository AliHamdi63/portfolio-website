import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://github.com/AliHamdi63?tab=repositories' target='_blank' className=''><BsLinkedin /></a>
            <a href='https://www.linkedin.com/in/ali-hamdi8/' target='_blank' className=''> <FaGithub /></a>
            {/* <a href='' target='_blank' className=''></a> */}
        </div>
    )
}

export default HeaderSocials