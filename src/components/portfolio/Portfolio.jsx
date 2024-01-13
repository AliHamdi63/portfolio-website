import React from 'react'

import "./portfolio.css"

import projects from './projects';


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    projects.map((item) => {
                        return (
                            <article className='portfolio__item' key={item.id}>
                                <div className='portfolio__item-image'>
                                    <img src={item.image} alt='portfolio' />
                                </div>
                                <h3>{item.title}</h3>
                                <div className='portfolio__container-cta'>
                                    <a href={item.github} className='btn' target='_blank'>Github</a>
                                    <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        );
                    })
                }


            </div>
        </section>
    )
}

export default Portfolio