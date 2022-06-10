import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto mr-5" navbar>
          <NavItem className="mr-5">
            <NavLink className="p-2" to="/create">NewItem</NavLink>
            <NavLink className="p-2" to="/snacks">Snacks</NavLink>
            <NavLink className="p-2" to="/drinks">Drinks</NavLink>


          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
