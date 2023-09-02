import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                <h3>Web Design</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Adobe Program</h4>
                        <small className='text-light'>Experienceed</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Figma</h4>
                        <small className='text-light'>Experienceed</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Adobe Program</h4>
                        <small className='text-light'>Experienceed</small>
                        </div>
                    </article>
                </div>
                </div>
                {/* END OF FRONTEND */}

                <div className="experience__backend">
                    <h3>Frontend Development</h3>
                     <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienceed</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Redux</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Experience