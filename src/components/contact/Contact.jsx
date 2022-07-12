/* eslint-disable no-unused-vars */
import React from 'react'
import './contact.css'

import {AiTwotoneMail} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ud6d2g5', 'template_ndxihkl', form.current, 'PNVFIGcZv0ah7qzE_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <AiTwotoneMail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>holic613@gmail.com</h5>
                    <a href="mailto:holic613@gmail.com">Send a message</a>
                </article>

                <article className="contact__option">
                    <IoLogoWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+49 1511 2984 291</h5>
                    <a href="https://api.whatsapp.com/send?phone=+4915112984291" target="blank">Send a message</a>
                </article>

                <article className="contact__option">
                    <AiFillInstagram className='contact__option-icon'/>
                    <h4>Instgram</h4>
                    <h5>lin_fattypie</h5>
                    <a href="https://www.instagram.com/lin_fattypie/">Send a message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
        </section>
    )
}

export default Contact