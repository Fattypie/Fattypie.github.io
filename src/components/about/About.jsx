/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React from 'react'
import './about.css'
import ME from '../../assets/Yuk Lin_Ng.jpg'
import {MdWork} from 'react-icons/md'
import {BiRun} from 'react-icons/bi'
import {AiFillFile} from 'react-icons/ai'
import ReactTypingEffect from 'react-typing-effect';

function About() {
    return (
        <section id='about'>
          
          <div className="about__title">
            <h5>Get to know</h5>
            <ReactTypingEffect text={["About me"]} 
            cursorRenderer={cursor => <h2>{cursor}</h2>} 
            cursorColor="pink"/>
            {/* <h2>About me</h2> */}
            </div>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div clssName="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <MdWork className='about__icon' />
                            <h5>Experience</h5>
                            <small>3 Months Working</small>
                        </article>

                        <article className='about__card'>
                            <BiRun className='about__icon' />
                            <h5>Where did I started?</h5>
                            <small>move UP GmbH Hamburg </small>
                        </article>
                    </div>

                    <p>
                        I love hotpot  I love hotpot I love hotpot I love hotpot
                        I love hotpot I love hotpot I love hotpot I love hotpot
                        I love hotpot I love hotpot I love hotpot I love hotpot
                    </p>
                </div>
            </div>
        </section>
       
    )
}

export default About