import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import AppNavbar from "./Components/AppNavbar/AppNavbar";
import About from "./Components/About/About";

class App extends Component {
  render() {
    return (

      <Router>
      <div>

        <AppNavbar/>

        <Switch>
          {/* <Route exact path="/" component={About} /> */}
        </Switch>

      </div>
      </Router>

    );
  }
}

export default App;
