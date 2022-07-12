import React from 'react'
import {toggleTheme} from './Helper.js'

const Button = () => {
    return (
        <div className="button">
           <label id="switch" class="switch">
            <input type="checkbox" onchange={() =>toggleTheme} id="slider" />
            <span class="slider round"></span>
        </label>   
        </div>
    )
}

export default Button