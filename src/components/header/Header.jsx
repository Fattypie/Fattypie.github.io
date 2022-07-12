import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Lin-icon.png'
import HeaderSocials from './HeaderSocials'
import Button from './Button.jsx'

const Header = () => {
    
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Lin</h1>
               <Button />
                <h5 className="text-ligt">Frontend Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>
            </div>
            <div className="header__spacer"></div>
        </header>
    )
}

export default Header