import React, { Component } from "react"
import "./Patient.scss"
import { Form, Button, Col, Row } from "react-bootstrap"
import firebase from "../../../firebase"
import { Link } from "react-router-dom"

class Patient extends Component {
	constructor(props) {
		super(props)
		this.state = { ...props.profile }
		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(e) {
		e.preventDefault()
		this.setState({ isProfileComplete: true })
		const uid = firebase.auth().currentUser.uid
		firebase
			.firestore()
			.collection("users")
			.doc(uid)
			.update({ ...this.state })
			.then(() => console.log("profile updated"))
			.catch(e => console.log(e))
	}

	render() {
		return (
			<Form id='Patient' onSubmit={this.onSubmit}>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='Name'
						placeholder='Enter Name'
						required={true}
						minLength={1}
						value={this.state.name}
						onChange={e => this.setState({ name: e.target.value })}
					/>
				</Form.Group>

				<Form.Group controlId='age'>
					<Form.Label>Age</Form.Label>
					<Form.Control
						type='number'
						placeholder='Enter Age'
						required={true}
						value={this.state.age}
						onChange={e =>
							this.setState({
								age: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId='gender'>
					<Form.Label>Gender</Form.Label>
					<Form.Control
						as='select'
						defaultValue='Gender'
						required={true}
						value={this.state.gender}
						onChange={e =>
							this.setState({ gender: e.target.value })
						}>
						<option>Male</option>
						<option>Female</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='disease'>
					<Form.Label>Any Past Disease</Form.Label>
					<Form.Control
						type='Text'
						placeholder=' Enter Disease'
						value={this.state.disease}
						onChange={e =>
							this.setState({ disease: e.target.value })
						}
					/>
				</Form.Group>

				<Row>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
					<Link
						className={`btn btn-success ml-3 ${
							!this.state.isProfileComplete && "disabled"
						}`}
						to='/dashboard'>
						Dashboard
					</Link>
				</Row>
			</Form>
		)
	}
}

export default Patient
