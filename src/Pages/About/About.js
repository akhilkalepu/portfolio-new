import React, { Component } from 'react';
import AkhilKalepuSuit from '../../Images/Akhil Kalepu Suit.jpg';
import "./About.css";

import {
  
} from "reactstrap";


class About extends Component {

  render() {
    return (
      <div className="About">

        <img className="col-lg-4 col-md-4 col-sm-6 col-xs-12" id="about-img" src={AkhilKalepuSuit} alt="akhil kalepu suit"/>

        <p className="col-lg-8 col-md-8 col-sm-6 col-xs-12" id="about-p">Hello! My name is Akhil Kalepu, I'm a full stack web developer living in Philadelphia, Pennsylvania. My skills include the following:</p>

        <ul className="col-lg-8 col-md-8 col-sm-6 col-xs-12" id="about-skills">
          <li>HTML, CSS and JavaScript</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Express.js</li>
          <li>jQuery</li>
          <li>SQL and NoSQL</li>
          <li>RESTful APIs</li>
          <li>Git and Heroku</li>
        </ul>

        <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12" id="about-p">

          <p>You can reach me at <a href="mailto:akhilkalepu@protonmail.com">akhilkalepu@protonmail.com</a>.</p>
          
          <p>You can find my resume <a href="https://drive.google.com/file/d/1fKqMamTFEtmqzlPwgek1le_C6MqMXAaq/view?usp=sharing" target="_blank">here</a>.</p>

        </div>

      </div>
    );
  }
}

export default About;
