import React, { Component } from 'react';
import "./AppNavbar.css";

import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  Container
} from "reactstrap";

import {
  NavLink
} from "react-router-dom";

class AppNavbar extends Component {

  // constructor(props) {
  //   super(props);

  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true
  //   };
  // }

  // toggleNavbar() {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // }
  
  render() {
    return (
      <div>
        <Navbar color="white" light expand="sm" fixed={`top`} className="mb-5">

          <Container>

            <NavbarBrand id="AkhilKalepu" href="/">Akhil Kalepu</NavbarBrand>

            {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

            <Collapse isOpen={!this.state.collapsed} navbar> */}

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
                  <NavLink className="NavLinks" exact to="https://github.com/theinfamousAK" target="_blank">
                    github
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="NavLinks" exact to="https://www.linkedin.com/in/akhilkalepu/" target="_blank">
                    linkedin
                  </NavLink>
                </NavItem>

              </Nav>

            {/* </Collapse> */}

          </Container>
        </Navbar>

      </div>
    );
  }
}

export default AppNavbar;
