import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

interface NavBarProps {
  brandText: string
}

const Header: React.FC<NavBarProps> = ({ brandText }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
        <NavbarBrand href="/">{brandText}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/division-rivals">Division Rivals</NavLink>
            </NavItem>
          </Nav>
        </Collapse> 
      </Navbar>
    </div>
  )
}

export default Header;
