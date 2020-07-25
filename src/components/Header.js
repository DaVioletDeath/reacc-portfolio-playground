import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import {
    Link
  } from "react-router-dom";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Violet Dreyfuss</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to = "/">About Me</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to = "/portfolio">Portfolio</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to = "/contact">Contact</Link></NavLink>
            </NavItem>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;