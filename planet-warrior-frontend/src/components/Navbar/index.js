import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements'

function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to='/'>PlanetWarrior</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
