import React from 'react'
import { Nav, NavLink, NavMenu, Btn } from './NavbarElements'
import { Box, Button } from '@chakra-ui/react'; 
import { useHistory } from "react-router-dom"

function Navbar({currentUser, setCurrentUser}) {
  const history = useHistory()

    function logout() {
        localStorage.removeItem("token");
        setCurrentUser(null);
        history.push("/");
  }

  return (
    <>
      <Nav>
        <div className="nav-menu">
        </div>
      </Nav>
      <Box bg="#229955" w="100%" p={2} color="white" textAlign="center">
     
          <NavMenu>
            {currentUser ? (
              <>
              <NavLink to="/" activeStyle>
                Home
              </NavLink>
              <NavLink to="/tasks" activeStyle>
                Tasks
              </NavLink>
              <NavLink to="/profile" activeStyle>
              Profile
              </NavLink>
              </>
            ) : (
              <>
              <NavLink to="/" activeStyle>
                Home
              </NavLink>
              <NavLink to="/about" activeStyle>
                About
              </NavLink>
              <NavLink to="/tasks" activeStyle>
                Tasks
              </NavLink>
              </>
            )}
          <div className="log-in-btns">
          {currentUser ? (
              <>
              <Button onClick={logout} variant="solid" colorScheme="blue" size="md" mr="1" fontWeight="medium">
                <Btn to="/profile" activeStyle>
                Log Out
                </Btn>
              </Button>
              </>
            ) : (
              <>
              <Button variant="solid" colorScheme="blue" size="md" mr="3" fontWeight="medium">
                <Btn to="/login" activeStyle>
                Log In
                </Btn>
              </Button>
              </>
            )}
          </div>
          </NavMenu>
          </Box>
    </>
    )
}

export default Navbar
