import React, { Component } from "react"
import "./Header.scss"
import { Navbar, NavDropdown, Nav } from "react-bootstrap"

class Header extends Component {
	state = {}
	render() {
		return (
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Navbar.Brand href='/'></Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/Register'>REGISTER</Nav.Link>
						<Nav.Link href='/Login'>LOGIN</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Header
