import React from 'react'
import Helmet from 'react-helmet'
import Axios from 'axios'
import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import { FaEnvelopeOpen, FaMobileAlt } from 'react-icons/fa';
import thumb01 from '../assets/images/thumbs/wgfs-1-small.jpeg';

import thumb03 from '../assets/images/thumbs/merchant-portal-1-small.png';
import thumb04 from '../assets/images/thumbs/merchant-portal-3-small.png';
import thumb05 from '../assets/images/thumbs/merchant-portal-2-small.png';
import thumb06 from '../assets/images/thumbs/email-marketing-3-small.png';
import thumb07 from '../assets/images/thumbs/email-marketing-2-small.png';
import thumb08 from '../assets/images/thumbs/bris-biscuits-2-small.png';
import thumb09 from '../assets/images/thumbs/bris-biscuits-1-small.png';
import thumb10 from '../assets/images/fulls/toolots-new-ui-5-large.png';
import thumb11 from '../assets/images/fulls/toolots-new-ui-6-large.png';
import thumb12 from '../assets/images/fulls/toolots-new-ui-7-large.png';

import full01 from '../assets/images/fulls/wgfs-1-large.jpeg';

import full03 from '../assets/images/fulls/merchant-portal-1-large.png';
import full04 from '../assets/images/fulls/merchant-portal-3-large.png';
import full05 from '../assets/images/fulls/merchant-portal-2-large.png';
import full06 from '../assets/images/fulls/email-marketing-3-large.png';
import full07 from '../assets/images/fulls/email-marketing-2-large.png';
import full08 from '../assets/images/fulls/bris-biscuits-2-large.png';
import full09 from '../assets/images/fulls/bris-biscuits-1-large.png';
import full10 from '../assets/images/fulls/toolots-new-ui-5-large.png';
import full11 from '../assets/images/fulls/toolots-new-ui-6-large.png';
import full12 from '../assets/images/fulls/toolots-new-ui-7-large.png';

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},

    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '7', source: full07, thumbnail: thumb07, caption: 'Photo 7', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '8', source: full08, thumbnail: thumb08, caption: 'Photo 8', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '9', source: full09, thumbnail: thumb09, caption: 'Photo 9', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '9', source: full10, thumbnail: thumb10, caption: 'Photo 10', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '9', source: full11, thumbnail: thumb11, caption: 'Photo 11', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '9', source: full12, thumbnail: thumb12, caption: 'Photo 12', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
];

class HomeIndex extends React.Component {
    response(e) {
        console.log(e.target.email.value);
        e.preventDefault()
        const data = {
            from: e.target.email.value,
            subject: e.target.name.value,
            text: e.target.message.value,
            html: e.target.message.value
        };
        Axios.post(
            'https://alonzoalden.com/api/email',
            data,
            { headers: { 'Content-Type': 'application/json' } }
        )
    }
    render() {
        const siteTitle = "Alonzo Alden"
        const siteDescription = "Alonzo Alden Web Developer"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Welcome to Alonzo's Portfolio.</h2>
                        </header>
                        <p>
                            Creation is my passion and I express it through code. 
                            I enjoy working on all aspects of web development from small business sites to large scale interactive web applications. I have experience with some of the latest dev tech, including React, Angular, Node.JS, PostgreSQL.
                            If you believe I can be of any further assistance, please feel free to contact me.
                        </p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>If you think I could be of any help, please contact me.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#" onSubmit={this.response}>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" />
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    {/* <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li> */}
                                    <li>
                                        <h3 className="icon"><FaMobileAlt /><span className="label">Phone</span></h3>
                                        661-488-6979
                                    </li>
                                    <li>
                                        <h3 className="icon"><FaEnvelopeOpen /><span className="label">Email</span></h3>
                                        <a href="mailto:alonzoalden@gmail.com">alonzoalden@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex