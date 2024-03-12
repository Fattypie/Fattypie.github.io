/* eslint-disable no-unused-vars */
import React from 'react'
import './contact.css'
import './DynamicButton.jsx'
import { useState } from 'react';
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

      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showMessage, setShowMessage] = useState(false);

    //This function handles the cursor movement after entering the div
    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    //This function handles entering div with cursor
    const handleMouseEnter = () => {
        setShowMessage(true);
    };

    //This function handles leaving div with cursor
    const handleMouseLeave = () => {
        setShowMessage(false);
    };

    const redirectWhatsapp = () => {
        window.location.href = "https://api.whatsapp.com/send?phone=+4915112984291"
    }

    const redirectEmail = () => {
        window.location.href = "mailto:holic613@gmail.com"
    }

    return (
        <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option" onClick={redirectEmail} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <AiTwotoneMail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>holic613@gmail.com</h5>
                    {/* <a href="mailto:holic613@gmail.com">Send a message</a> */}
                    
                </article>

                <article className="contact__option" onClick={redirectWhatsapp} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <IoLogoWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+49 1511 2984 291</h5>
                    
                </article>
            </div>
            {showMessage && (
                    <div className="message__container" style={{ top: mousePosition.y, left: mousePosition.x }}>
                        <div className="message__circle">
                            <p>Send a message</p>
                        </div>
                    </div>
                )}

            
            
          {/*  <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
             */}
        </div>
        </section>
    )
}

export default Contact