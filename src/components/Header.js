import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="https://alonzoalden.com" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hi, I'm Alonzo</strong>, a software developer <br />
                    with a passion for creating. <br /> I work with tools like Angular, React and Node.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
