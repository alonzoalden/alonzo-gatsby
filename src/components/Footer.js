import React from 'react'
import { ReactComponent as Logo } from '../assets/images/strava-brands.svg';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.instagram.com/attaboylonnie/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="https://github.com/alonzoalden" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.facebook.com/alonzo.alden" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        {/* <li><a href="https://www.facebook.com/alonzo.alden" className="icon fa-strava"><span className="label">Strava</span></a></li> */}
                        
                        <li><a href="mailto:alonzoalden@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
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
