import React, { Component } from 'react';
import projects from "../../projects.json";
import "./Projects.css";

import Wrapper from "../../Components/Wrapper/Wrapper";
import Card from "../../Components/Card/Card"

import {
  
} from "reactstrap";


class Projects extends Component {

  state = {
    projects
  };

  render() {
    return (
      <Wrapper>
        {this.state.projects.map(card => (
            <Card
              key={card.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              id={card.id}
              image={card.image}
            />
          ))}
      </Wrapper>
    );
  }
}

export default Projects;
