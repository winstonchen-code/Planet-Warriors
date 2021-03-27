import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './components/Home/Home';
import Tasks from './components/Tasks/Tasks';
import Profile from './components/Profile/Profile';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import { ChakraProvider } from '@chakra-ui/react'; 


function App() {
  return (
    <Router>
      <ChakraProvider>

      <GlobalStyle />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
          </Switch>

      </ChakraProvider>
    </Router>
  );
}

export default App;
