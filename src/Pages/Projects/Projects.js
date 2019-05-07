import React, { Component } from 'react';
import projects from "../../projects.json";
import "./Projects.css";

import Wrapper from "../../Components/Wrapper/Wrapper";
import ProjectCard from "../../Components/ProjectCard/ProjectCard"

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
            <ProjectCard
              id={card.id}
              name={card.name}
              image={card.image}
              link={card.link}
              desc={card.desc}
              button={card.button}
            />
          ))}
      </Wrapper>
    );
  }
}

export default Projects;
