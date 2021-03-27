import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './components/Home/Home';
import Tasks from './components/Tasks/Tasks';
import Profile from './components/Profile/Profile';
import NavBar from './components/Navbar/NavBar';


function App() {
  return (
    <Router>
      <GlobalStyle />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/tasks" exact component={Tasks} />
            <Route exact path="/profile" exact component={Profile} />
          </Switch>

        </Router>
  );
}

export default App;
