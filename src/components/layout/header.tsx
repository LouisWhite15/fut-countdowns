import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

interface NavBarProps {
  brandText: string
}

const Header: React.FC<NavBarProps> = ({ brandText }) => {

  return (
    <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
      <NavbarBrand>{brandText}</NavbarBrand>
    </Navbar>
  )
}

export default Header;
