import React, { Component } from "react"
import "./Login.scss"
import { Form, Button } from "react-bootstrap"
import { default as firebase } from "../../firebase"

class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: "",
			isEmailInvalid: null,
			password: "",
			isPasswordWrong: null,
		}

		this.onSubmit = this.onSubmit.bind(this)
	}

	onValuesUpdate = e => {
		const inputType = e.target.type
		if (inputType == "email") {
			this.setState({
				email: e.target.value.trim(),
				isEmailInvalid: false,
			})
		} else if (inputType == "password") {
			this.setState({
				password: e.target.value.trim(),
				isPasswordWrong: false,
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(userCredentials => {
				console.log(userCredentials)
			})
			.catch(e => {
				const errorCode = e.code
				switch (errorCode) {
					case "auth/user-not-found":
						this.setState({ isEmailInvalid: true })
						break
					case "auth/wrong-password":
						this.setState({ isPasswordWrong: true })
						break
					default:
						// this could be someyhing that needs to be handled
						console.log(errorCode)
				}
			})
	}

	render() {
		return (
			<div className='Login'>
				{this.props.user && this.props.history.push("/")}
				<Form id='Login' onSubmit={this.onSubmit}>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							id='email'
							placeholder='you@email.com'
							value={this.state.email}
							isInvalid={this.state.isEmailInvalid}
							required={true}
							onChange={this.onValuesUpdate}
						/>
						<Form.Control.Feedback type='invalid'>
							Email does not exists
						</Form.Control.Feedback>
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							id='password'
							placeholder='your super secret password'
							required={true}
							value={this.state.password}
							isInvalid={this.state.isPasswordWrong}
							onChange={this.onValuesUpdate}
						/>
						<Form.Control.Feedback type='invalid'>
							Your password does not match
						</Form.Control.Feedback>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		)
	}
}

export default Login
