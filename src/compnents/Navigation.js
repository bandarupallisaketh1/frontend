import React from 'react'
import { Link } from 'react-router-dom'
import {Nav, Navbar, NavLink } from "react-bootstrap"

export default function Navigation() {
  return (
    <div>
        <Navbar collapseOnSelect expand="sn" bg="dark" variant="dark">
            <Navbar.Toggle aria-aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navabrScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink eventKey="1" as={Link} to="/">ResistrationPage</NavLink>
                    <NavLink eventKey="2" as={Link} to="/loginpage">LoginPage</NavLink>
                    <NavLink eventKey="3" as={Link} to="/productspage">ProductsPage</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}
