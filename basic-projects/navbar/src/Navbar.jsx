import React, {useEffect, useRef, useState} from 'react'
import logo from '../src/assets/logo.svg'
import {FaBars} from "react-icons/fa";
import {links, social} from "./data.jsx";

export const Navbar = () => {
    /*const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => setShowLinks(!showLinks)

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='logo' alt='logo'/>
                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars/>
                    </button>
                </div>
                <div className={`${showLinks ?
                    'links-container show-container' : 'links-container'}`}>
                    <ul className='links'>
                        {
                            links.map((link) => {
                                const {id, url, text} = link
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className='social-icons'>
                    {
                        social.map((socialIcon) => {
                            const {id, url, icon} = socialIcon
                            return (
                                <div key={id}>
                                    <a href={url}>{icon}</a>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    )*/

    const [showLinks, setShowLinks] = useState(false)

    const linksContainerRef = useRef(null)

    const linksRef = useRef(null)

    const toggleLinks = () => setShowLinks(!showLinks)

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks])

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='logo' alt='logo'/>
                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars/>
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {
                            links.map((link) => {
                                const {id, url, text} = link;
                                return (
                                    <li key={id}><a href={url}>{text}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className='social-icons'>
                    {
                        social.map((socialIcon) => {
                            const {id, url, icon} = socialIcon
                            return (
                                <li key={id}><a href={url}>{icon}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}
