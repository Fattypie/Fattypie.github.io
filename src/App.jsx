/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import LoadingPage from './components/loading/LoadingPage'



const App = () => {
    const [loading, setLoading] = useState(true)

    return (
        <React.Fragment>
        {loading && <LoadingPage onDone={() => setLoading(false)} />}
        {!loading && (
            <>
            <Header />
            <Nav />
            <About />
            {/*<Uniproject />   import Uniproject from './components/uniproject/Uniproject'*/}
            <Experience />
            <Contact />
            </>
        )}
        </React.Fragment>

    )
}

export default App