import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './components/Home/Home';
import Tasks from './components/Tasks/Tasks';
import Profile from './components/Profile/Profile';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import { ChakraProvider } from '@chakra-ui/react'; 
import axios from 'axios';


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [captain, setCaptain] = useState({})

  useEffect(() => {
    fetch("https://planetwarriors.herokuapp.com/api/v1/autologin", {
    headers: {"Authorization": `Bearer ${localStorage.token}`}})
    .then(res => res.json())
    .then(response => {
      if (response.id) setCurrentUser(response)
    })
  },[])

    useEffect(() => {
    fetch("https://planetwarriors.herokuapp.com/api/v1/captain", {
    headers: {"Authorization": `Bearer ${localStorage.token}`}})
    .then(res => res.json())
    .then(response => {
      setCaptain(response)
    })
  },[currentUser])


console.log(captain)

  return (
    <Router>
      <ChakraProvider>

      <GlobalStyle />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path='/tasks'>
              <Tasks captain={captain} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Route>
            {currentUser ? 
              <Route exact path='/profile'>
                <Profile currentUser={currentUser}/>
              </Route> : null}
            <Route exact path='/login'>
              <Login setCurrentUser={setCurrentUser}/>
            </Route>
          </Switch>

      </ChakraProvider>
    </Router>
  );
}

export default App;
