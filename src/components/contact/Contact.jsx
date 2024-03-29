import React, { useRef } from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { RiMessageLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"

import "./contact.css"

import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k1yke79', 'template_pbnnjlb', form.current, 'Wz2lChQuVXf22sB3p')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>alihamdi2199@gmail.com</h5>
                        <a href='mailto:alihamdi2199@gmail.com' className='' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessageLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Ali Hamdi Ali</h5>
                        <a href='https://m.me/profile.php?id=100002978358677' className='' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+201067493525</h5>
                        <a href="https://web.whatsapp.com//send?phone+201067493525" className='' target='_blank'>Send a message</a>
                    </article>
                </div>

                {/* END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' placeholder='Your Name' required />
                    <input type='email' name='user_email' placeholder='Your Email' required />
                    <input type='text' name='user_subject' placeholder='Subject' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact