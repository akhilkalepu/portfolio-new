import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import AppNavbar from "./Components/AppNavbar/AppNavbar";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";

class App extends Component {
  render() {
    return (

      <Router>
      
        <div className="App">

            <AppNavbar/>

            <div className="body">
              
              <Route exact path="/" component={About} />
              <Route exact path="/projects" component={Projects} />

            </div>

        </div>

      </Router>

    );
  }
}

export default App;
