import { useState } from 'react'
import logo from '../assets/logo.png'
import { FiMenu } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import classes from './Navbar.module.css'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [menu, setMenu] = useState('home');
    const navigate = useNavigate()

    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <img src={logo} alt="company logo" />
                    <p>CITADEL GLOBAL COURIER</p>
                </div>
                <ul className={classes.list}>
                    <a href='#home'><li onClick={() => { setMenu("home") }}>Home{menu === "home" ? <hr /> : <></>}</li></a>
                    <a href="#services"><li onClick={() => { setMenu("services") }}>Services{menu === "services" ? <hr /> : <></>}</li></a>
                    <a href="#about"><li onClick={() => { setMenu("about") }}>About{menu === "about" ? <hr /> : <></>}</li></a>
                    <a href="#track"><li className='button' onClick={() => { setMenu("track") }}>Track</li></a>
                </ul>
                <FiMenu onClick={() => setShowMenu(true)} className={classes.bar} />
            </div>

            <div className={classes.wrapper}>

                {/* ......... Mobile menu ............... */}

                {showMenu && (
                    <div className={`${showMenu ? classes.mobile : classes.mobilehide}`}>
                        <div className={classes['logo-wrapper']}>
                            <img src={logo} alt="logo" onClick={() =>{navigate('/'); setShowMenu(false) }} />
                            <ImCancelCircle className={classes.hide} onClick={() => setShowMenu(false)} />
                        </div>
                        <ul className={classes.navlink}>
                            <a href='#home'><li onClick={() => setShowMenu(false)}>Home</li></a>
                            <a href='#services'><li onClick={() => setShowMenu(false)}>Services</li></a>
                            <a href='#about'><li onClick={() => setShowMenu(false)}>About</li></a>
                            <a href='#track'><li onClick={() => setShowMenu(false)} className='button'>Track</li></a>
                        </ul>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar