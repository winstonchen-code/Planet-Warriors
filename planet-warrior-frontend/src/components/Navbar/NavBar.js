import React from 'react'
import {Nav, NavLink, NavIcon, Bars, NavMenu} from './NavbarElements'

function Navbar() {
    return (
        <>
      <Nav>
        <NavLink to="/">
          <img src="" alt=""/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/tasks" activeStyle>
            tasks
          </NavLink>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
        </NavMenu>
      </Nav>
    </>
    )
}

export default Navbar
