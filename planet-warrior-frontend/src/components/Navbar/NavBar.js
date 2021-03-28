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
      <Box bg="#229955" w="100%" p={2} color="white" textAlign="center">
     
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
            <Button variant="solid" colorScheme="blue" size="md" mr="3" fontWeight="medium">Log In</Button>
            <Button variant="solid" colorScheme="blue" size="md" mr="3" fontWeight="medium">Log Out</Button>
          </div>
          </NavMenu>
          </Box>
    </>
    )
}

export default Navbar
