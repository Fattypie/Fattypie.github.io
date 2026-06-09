/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React from 'react'
import './about.css'
import ME from '../../assets/Yuk Lin_Ng.jpg'
import {MdWork} from 'react-icons/md'
import {BiRun} from 'react-icons/bi'
import {FaHandPeace} from "react-icons/fa";
import {FaLightbulb} from "react-icons/fa";
import {AiFillFile} from 'react-icons/ai'
import ReactTypingEffect from 'react-typing-effect';
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

function About() {

    useEffect(() => {
        ScrollReveal().reveal('.container', {
    delay: 200});

    ScrollReveal().reveal('.about__card1, .about__card3', {
    distance: '30px', 
    origin: 'left', 
    delay: 500,
    duration: 1500
    });

    ScrollReveal().reveal('.about__card2', {
    distance: '30px', 
    origin: 'right', 
    delay: 800,
    duration: 1500
    });

     ScrollReveal().reveal('.about__card3', {
    distance: '30px', 
    origin: 'left', 
    delay: 1000,
    duration: 1500
    });

    ScrollReveal().reveal('about__card4', {
    distance: '30px',
    origin: 'right',
    delay: 1500,
    duration: 1500
    });
    }, [])
    

    
    
    return (
        <section id='about'>
          
          <div className="about__title">
            <h2>Journey</h2>
            <ReactTypingEffect text={["About me"]} style={{fontSize: 20}}/>
            </div>

            <div className="container about__container">
                {/*
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>  
                */}

                <div className="about__content">
                    <div className="about__cards">

                        <article className='about__card1'>
                            <div className='about_ti'>
                            <FaHandPeace className='about__icon' />
                            <h2> Bye bey Uni</h2>
                            </div>
                            
                            <h5>I completed my Bachelor's degree in Communication Design in Germany. As a native Cantonese speaker, earning a degree entirely in German was both challenging and rewarding. During my studies, I became increasingly interested in how digital products are built—not just how they look. While searching for internships, I realized that learning frontend development would make me a stronger UI/UX designer.</h5>
                        </article>

                        <article className='about__card2'>
                            <div className='about_ti'>
                                <FaLightbulb className= 'about__icon' />
                            <h2> The Turning Point</h2> 
                            </div>
                           
                            <h5>Wanting to better understand the technical side of digital products, I joined Moveup GmbH as a Web Development Intern. There, I started learning HTML, CSS, some PHP, and working with WordPress. What began as curiosity quickly turned into a genuine passion for software development. 
After the internship, I joined OMR Education as a Frontend Developer. Working on larger projects allowed me to take ownership of features and collaborate closely with designers, developers, and stakeholders. It was my first professional step into the software industry and confirmed that development was the path I wanted to pursue.</h5>
                        </article>

                        
                    </div>

                    <p>
                
                    </p>
                </div>
            </div>
        
        </section>
       
    )

}




export default About