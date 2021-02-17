import React, { useEffect, useState } from "react"
import "./App.css"
import firebase from "./firebase"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Login from "./Components/Login/Login.js"
import Register from "./Components/Register/Register"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
import Footer from "./Components/Footer/Footer"
import Profile from "./Components/Profile/Profile"
import Dashboard from "./Components/Dashboard/Dashboard"
function App() {
	const [user, updateUser] = useState(null)

	useEffect(() => {
		const firebaseAuthUnsubscribe = firebase.auth().onAuthStateChanged(
			firebaseUser => {
				if (firebaseUser) {
					const uid = firebaseUser.uid
					firebase
						.firestore()
						.collection("users")
						.doc(uid)
						.get()
						.then(doc => updateUser(doc.exists ? doc.data() : null))
						.catch(e => {
							console.log(e)
							updateUser(null)
						})
				} else {
					updateUser(null)
				}
			},
			error => {
				console.log(error.code)
			}
		)
		// cleanup function
		return function cleanup() {
			if (firebaseAuthUnsubscribe) firebaseAuthUnsubscribe()
		}
	}, [])

	return (
		<React.Fragment>
			<Header />
			<div className='safe-space' />
			<Router>
				<Switch>
					<Route path='/' exact component={Home}></Route>
					<Route
						path='/Login'
						exact
						render={props => (
							<Login {...props} user={user} />
						)}></Route>
					<Route
						path='/Register'
						exact
						render={props => (
							<Register {...props} user={user} />
						)}></Route>

					<Route
						path='/dashboard'
						exact
						component={Dashboard}></Route>
					<Route path='/profile' exact component={Profile} />
				</Switch>
			</Router>
			<Footer />
		</React.Fragment>
	)
}

export default App
