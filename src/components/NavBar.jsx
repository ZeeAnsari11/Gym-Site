import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import { links } from "../data"
import { FaBars } from "react-icons/fa"
import { useState } from 'react'

const NavBar = () => {
    const[isNavShowing , setIsShowing] = useState(false);
    return (
        <nav>
            <div className="container nav__container">
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Nav Logo" onClick={()=>setIsShowing(false)}/>
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path}  onClick={()=>setIsShowing(!isNavShowing)} className={({isActive})=> isActive ? 'active-nav': '' }> {name} </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-btn' onClick={()=>setIsShowing(!isNavShowing)}>
                    <FaBars />
                </button>
            </div>
        </nav>
    )
}


export default NavBar