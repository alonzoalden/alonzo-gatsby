import React from 'react'
//import { ReactComponent as Logo } from '../assets/images/strava-brands.svg';
//import { FaBeer } from 'react-icons/fa';
import { FaStrava, FaInstagram, FaGithub, FaFacebook, FaEnvelope } from 'react-icons/fa';


class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/alonzoalden" className="icon" rel="noopener noreferrer" target="_blank"><FaGithub /><span className="label">Github</span></a></li>
                        <li><a href="https://www.instagram.com/attaboylonnie/" className="icon" rel="noopener noreferrer" target="_blank"><FaInstagram /><span className="label">Instagram</span></a></li>
                        <li><a href="https://www.strava.com/athletes/929395" className="icon" rel="noopener noreferrer" target="_blank"><FaStrava /><span className="label">Strava</span></a></li>
                        <li><a href="https://www.facebook.com/alonzo.alden" className="icon" rel="noopener noreferrer" target="_blank"><FaFacebook /><span className="label">Facebook</span></a></li>
                        <li><a href="mailto:alonzoalden@gmail.com" className="icon" rel="noopener noreferrer" target="_blank"><FaEnvelope /><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Alonzo Alden</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
