import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  );
}

export default App;
