import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/yuk-lin-ng-a980b9220/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={30} /></a>
            <a href="https://github.com/Fattypie" target="_blank" rel="noreferrer"><AiFillGithub size={30} /></a>
            <a href="https://www.instagram.com/lin_fattypie/" target="_blank" rel="noreferrer"><AiFillInstagram size={30} /></a>
        </div>
    )
}

export default HeaderSocials

/* target blank will come the new window*/