import React from 'react'
import {NavLink} from "react-router-dom"

export const StyledNavbar = () => {
    return (
        <nav className='navbar'>
            <NavLink
                to='/'
                className={({isActive}) => isActive ? 'active' : 'link'}>
                Home
            </NavLink>
            <NavLink
                to='/about'
                className={({isActive}) => isActive ? 'active' : 'link'}>
                About
            </NavLink>
            <NavLink
                to='/products'
                className={({isActive}) => isActive ? 'active' : 'link'}>
                Products
            </NavLink>
            <NavLink
                to='/login'
                className={({isActive}) => isActive ? 'active' : 'link'}>
                Login
            </NavLink>
        </nav>
    )
}
