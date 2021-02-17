import React, { Component } from "react"
import "./Header.scss"
import { Navbar, Nav } from "react-bootstrap"
import firebase from "../../firebase"

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = { authenticated: false }
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) this.setState({ authenticated: true })
			else this.setState({ authenticated: false })
		})
	}

	render() {
		return (
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Navbar.Brand href='/'></Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						{!this.state.authenticated && (
							<Nav.Link href='/Register'>REGISTER</Nav.Link>
						)}
						{!this.state.authenticated && (
							<Nav.Link href='/Login'>LOGIN</Nav.Link>
						)}
						{this.state.authenticated && (
							<Nav.Link
								href='/'
								onClick={() => firebase.auth().signOut()}>
								Logout
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Header
