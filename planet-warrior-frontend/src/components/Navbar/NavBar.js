import React from 'react'
import {Nav, NavLink, NavMenu} from './NavbarElements'

function Navbar() {
  return (
    <>
      <Nav>
        <div className="nav-menu">
          <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/tasks" activeStyle>
              Tasks
            </NavLink>
            <NavLink to="/profile" activeStyle>
              Profile
            </NavLink>
          </NavMenu>
        </div>
      </Nav>
    </>
    )
}

export default Navbar
