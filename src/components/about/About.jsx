import React from 'react'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from "react-icons/vsc"
import "./about.css"

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                {/* <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={} alt='About me'/>
                    </div>
                </div> */}
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Experience </small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed Projects </small>
                        </article>
                    </div>
                    <p>
                        Full Stack Developer passionate about developing and optimizing interactive, user friendlyapplications Full
                        understanding of entire web development process (design, development,deployment). Continuously looking for discovering, evaluating, and learn many techniques thathelp me the performance and quality of code that make the web application faster.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About