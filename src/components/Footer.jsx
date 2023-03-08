import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from "react-icons/ai"




const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container footer__container">
                    <article>
                        <Link to='/' className="logo">
                            <img src={Logo} />
                        </Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit illo tenetur quia voluptas obcaecati
                            ea natus voluptatibus quibusdam quas, officiis unde corrupti qui vero ullam soluta, consectetur, nam pariatur.
                        </p>
                        <div className="footer__socials">
                            <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener" ><FaLinkedin/></a>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener" ><FaFacebook/></a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener" ><AiOutlineTwitter/></a>
                            <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener" ><AiFillInstagram/></a>
                        </div>
                    </article>
                    <article>
                        <h4>Permalinks</h4>
                        <Link to='/about'>About</Link>
                        <Link to='/plans'>Plans</Link>
                        <Link to='/trainers'>Trainer</Link>
                        <Link to='/gallery'>Gallery</Link>
                        <Link to='/contact'>Contact</Link>
                    </article>
                    <article>
                        <h4>Insights</h4>
                        <Link to='/s'>Blog</Link>
                        <Link to='/s'>Case Studies</Link>
                        <Link to='/s'>Events</Link>
                        <Link to='/s'>Communities</Link>
                        <Link to='/s'>FAQS</Link>
                    </article>
                    <article>
                        <h4>Get In Touch</h4>
                        <Link to='/contact'>Contact Us</Link>
                        <Link to='/s'>Support</Link>
                    </article>
                </div>
                <div className="footer__copyright">
                    <small>2022 EGATOR TURTORIALS &copy; All Rights Reserved</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer
