import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'




const Experience = () => {
    return (
        <section id='experience'>
       
      
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='stack_area'>
            <div className="container experience_container">
                <div className="experience_design card"><h3>Web Design</h3>
                    <div className='card_content'>
                    <div className="experience_skill"> 
                    <BsFillBookmarkCheckFill className='experience_detail-icon' />
                    <div>
                        <h4>Adobe Program</h4>
                        <small className='text-light'>Experienceed</small>
                        </div>
                    </div>
                    <div className="experience_skill"> 
                    <BsFillBookmarkCheckFill className='experience_detail-icon' />
                    <div>
                        <h4>Figma</h4>
                        <small className='text-light'>Experienceed</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="experience_frontend card">
                <h3>Frontend Development</h3>

                    <div className="experience_skill">
                    <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Adobe Program</h4>
                        <small className='text-light'>Experienceed</small>
                        </div> </div>

                         <div className="experience_skill">
                    <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Adobe Program</h4>
                        <small className='text-light'>Experienceed</small>
                        </div> </div>

                        <div className="experience_skill">
                    <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Figma</h4>
                        <small className='text-light'>Experienceed</small>
                        </div> </div>
                </div>
            </div>
           
          
        
        </div>
        </section>
    )
    
}
export default Experience

let cards = document.querySelectorAll(".card");



    function rotateCards() {
        let angle = 0;
        cards.forEach((card) => {
            if (card.classList.contains("active")) {
                card.style.transform =  `translate(-50%, -120vh) rotate(-48deg)`
            }else {
                card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            }
        });
    }
    rotateCards();

    window.addEventListener("scroll", () => {
        let proportion = document.querySelector(".stack_area").getBoundingClientRect().top / window.innerHeight;
        cards = document.querySelectorAll(".card");
        if (proportion <= 0) {
            let n = cards.length;
            let index = Math.ceil((proportion * n) / 2);
            index = Math.abs(index) - 1;
          

            console.log(proportion + ' : ' + index)
            for (let i = 0; i < n; i++) {
                if ( i <= index) {
                    cards[i].classList.add("active");
                } else {
                    cards[i].classList.remove("active");
                }
            }
            rotateCards();
        }
    });


 {/* <div className="container experience__container">
                <div className="experience__skill">
                    <div className="experience__design"><h3>Web Design</h3></div>
                    
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
                </div>
                
                

                <div className="experience__frontend"><h3>Frontend Development</h3></div>
                
                    <div className="experience__content">
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
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Redux</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            
            </div>
            */}

{/* 
the old ver: <seciond>  </section> NOT div
<h5 className="skills">What Skills I Have</h5>

<section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__design">
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
                </div>
                </div>

                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
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
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsFillBookmarkCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Redux</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
                </div>
            </div>
        </section>
*/}
