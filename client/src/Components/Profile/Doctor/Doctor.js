import React, { Component } from "react"
import "./Doctor.scss"
import { Form, Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import firebase from "../../../firebase"

class Doctor extends Component {
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
			<div className='Doctor'>
				<Form id='Patient' onSubmit={this.onSubmit}>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type='Name'
							placeholder='Enter Name'
							required={true}
							minLength={1}
							value={this.state.name}
							onChange={e =>
								this.setState({ name: e.target.value })
							}
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
					<Form.Group controlId='specialization'>
						<Form.Label>Your Specialization</Form.Label>
						<Form.Control
							type='Text'
							placeholder='Your Speacialization'
							value={this.state.specialization}
							onChange={e =>
								this.setState({
									specialization: e.target.value,
								})
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
			</div>
		)
	}
}

export default Doctor
