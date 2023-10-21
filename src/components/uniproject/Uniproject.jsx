/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Recovics from '../../assets/recovics_cover.png'
import './uniproject.css'


function Uniproject() {
    return (
        <section id='unip'>
           {/* <div className="unip__title"> */}
                <h5>Projects I build</h5>
                <h2>My Projects</h2>
                <div className="uniproject_container">
                    <img src={Recovics} />
                <a 
          href="https://www.linkedin.com/in/yuk-lin-ng-a980b9220/"
          target="_blank"
          class="recovics"
        >
        
         {/*Recovics*/} →
        </a>
                </div>
               
           {/* </div> */}
        </section>
    )
}

export default Uniproject