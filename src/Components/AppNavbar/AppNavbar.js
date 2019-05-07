import React, { Component } from 'react';
import "./AppNavbar.css";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";

import {
  NavLink
} from "react-router-dom";

class AppNavbar extends Component {
  
  render() {
    return (
      <div>
        <Navbar color="white" light expand="sm" fixed={`top`} className="mb-5">

          <Container>

            <NavbarBrand id="AkhilKalepu" href="/">Akhil Kalepu</NavbarBrand>

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                  className="NavLinks"
                  exact to = "/"
                  activeStyle = {
                      {
                        fontWeight: "bold",
                        color: "#ae0007"
                      }
                    } >
                    about me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  className="NavLinks"
                  exact to = "/projects"
                  activeStyle = {
                      {
                        fontWeight: "bold",
                        color: "#ae0007"
                      }
                    } >
                    projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="NavLinks" to="https://github.com/theinfamousAK/" exact={true} target="_blank">
                    github
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="NavLinks" exact to="https://www.linkedin.com/in/akhilkalepu/" target="_blank">
                    linkedin
                  </NavLink>
                </NavItem>

              </Nav>

          </Container>
        </Navbar>

      </div>
    );
  }
}

export default AppNavbar;
