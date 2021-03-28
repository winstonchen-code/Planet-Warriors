import React from 'react'
import { Nav, NavLink, NavMenu } from './NavbarElements'
import { Box, Button } from '@chakra-ui/react'; 

function Navbar() {
  return (
    <>
      <Nav>
        <div className="nav-menu">
        </div>
      </Nav>
      <Box bg="#229955" w="100%" p={3} color="white" textAlign="center" mb="40px">
     
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
          <div className="log-in-btns">
            <Button variant="solid" colorScheme="blue" size="lg" mr="3">Log In</Button>
            <Button variant="solid" colorScheme="blue" size="lg" mr="3">Log Out</Button>
          </div>
          </NavMenu>
          </Box>
    </>
    )
}

export default Navbar
