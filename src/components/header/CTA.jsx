import React from 'react'
import CV from '../../assets/Ali Hamdi Ali - Resume.pdf'


const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} className='btn '>Download CV</a>
            <a href='#contact' className='btn btn-primary '>Let's Talk</a>
        </div>
    )
}

export default CTA