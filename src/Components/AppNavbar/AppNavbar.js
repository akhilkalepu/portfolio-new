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
  Link,
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
                  <a className="NavLinks" href="https://github.com/theinfamousAK/" target="_blank">
                    github
                  </a>
                </NavItem>
                <NavItem>
                  <a className="NavLinks" href="https://www.linkedin.com/in/akhilkalepu/" target="_blank">
                    linkedin
                  </a>
                </NavItem>

              </Nav>

          </Container>
        </Navbar>

      </div>
    );
  }
}

export default AppNavbar;
