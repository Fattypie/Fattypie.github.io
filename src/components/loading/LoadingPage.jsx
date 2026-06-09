import React, { useEffect, useState } from 'react'
import pigNose from '../../assets/pigNose.png'
import './loading.css'

const LoadingPage = ({ onDone }) => {
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFadeOut(true), 3200)
        const doneTimer = setTimeout(() => onDone(), 3800)
        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(doneTimer)
        }
    }, [onDone])

    return (
        <div className={`loading__page${fadeOut ? ' fade-out' : ''}`}>
            <div className="loading__noses">
                <img src={pigNose} alt="pig nose" className="loading__nose" />
                <img src={pigNose} alt="pig nose" className="loading__nose" />
                <img src={pigNose} alt="pig nose" className="loading__nose" />
            </div>
            <p className="loading__text">loading...</p>
        </div>
    )
}

export default LoadingPage
