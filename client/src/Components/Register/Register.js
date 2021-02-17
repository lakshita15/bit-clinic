import React, { Component } from "react"
import "./Register.scss"
import { Form, Button } from "react-bootstrap"
import firebase from "../../firebase"

class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			password1: "",
			password2: "",
			isEmailTaken: false,
			isPasswordMatching: true,
			userType: "patient",
			isPasswordWeak: false,
		}

		this.onValuesChange = this.onValuesChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onValuesChange(e) {
		const inputId = e.target.id
		let newValue
		let isPasswordMatching
		switch (inputId) {
			case "email":
				this.setState({
					email: e.target.value.trim(),
					isEmailTaken: false,
				})
				break
			case "password1":
				newValue = e.target.value.trim()
				isPasswordMatching = this.state.password2 === newValue
				this.setState({
					password1: newValue,
					isPasswordMatching: isPasswordMatching,
				})
				break
			case "password2":
				newValue = e.target.value.trim()
				isPasswordMatching = this.state.password1 === newValue
				this.setState({
					password2: newValue,
					isPasswordMatching: isPasswordMatching,
				})
				break
			case "userType":
				this.setState({ userType: e.target.value })
				break
			default:
				break
		}
	}

	onSubmit(e) {
		e.preventDefault()
		firebase
			.auth()
			.createUserWithEmailAndPassword(
				this.state.email,
				this.state.password1
			)
			.then(userCred => {
				console.log(userCred)
				const firestore = firebase.firestore()
				return firestore
					.collection("users")
					.doc(userCred.user.uid)
					.set({
						userType: this.state.userType,
					})
			})
			.then(() => console.log("user added to collection"))
			.catch(e => {
				const errCode = e.code
				switch (errCode) {
					case "auth/email-already-in-use":
						this.setState({ isEmailTaken: true })
						break
					case "auth/weak-password":
						this.setState({ isPasswordWeak: true })
						break
					default:
						// this may need to be handled
						break
				}
			})
	}

	render() {
		return (
			<div className='Register'>
				{this.props.user && this.props.history.push("/")}
				<Form id='Register' onSubmit={this.onSubmit}>
					<Form.Group controlId='email'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							itemID='email'
							placeholder='you@email.com'
							required={true}
							isInvalid={this.state.isEmailTaken}
							onChange={this.onValuesChange}
						/>
						<Form.Control.Feedback type='invalid'>
							This email is already taken
						</Form.Control.Feedback>
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId='password1'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							itemID='password1'
							required={true}
							value={this.state.password1}
							onChange={this.onValuesChange}
							minLength={6}
							isInvalid={this.state.isPasswordWeak}
						/>
						<Form.Control.Feedback type='invalid'>
							This password is weak
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId='password2'>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Confirm Password'
							itemID='password2'
							required={true}
							value={this.state.password2}
							onChange={this.onValuesChange}
							isInvalid={
								this.state.password1 !== this.state.password2
							}
						/>
						<Form.Control.Feedback type='invalid'>
							Passwords do not match
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId='userType'>
						<Form.Label>User type</Form.Label>
						<Form.Control
							itemID='userType'
							as='select'
							required={true}
							value={this.state.userType}
							onChange={this.onValuesChange}>
							<option value='patient'>Patient</option>
							<option value='doctor'>Doctor</option>
						</Form.Control>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		)
	}
}

export default Register
