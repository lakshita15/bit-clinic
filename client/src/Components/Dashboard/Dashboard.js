import React, { useEffect, useState } from "react"
import firebase from "../../firebase"
import PatientDashboard from "./Patient/Patient"
import DoctorDashboard from "./Doctor/Doctor"

export default function Dashboard(props) {
	const [user, updateUser] = useState(null)

	useEffect(() => {
		firebase.auth().onAuthStateChanged(
			user => {
				if (user) {
					const uid = user.uid
					firebase
						.firestore()
						.collection("users")
						.doc(uid)
						.onSnapshot(
							snapshot => {
								if (snapshot.exists) updateUser(snapshot.data())
								else updateUser(null)
							},
							error => updateUser(null)
						)
				} else {
					this.props.history.push("/login")
				}
			},
			error => console.error(error)
		)
	}, [updateUser])

	return (
		<div className='dashboard'>
			{user &&
				!user.isProfileComplete &&
				this.props.history.push("/profile")}
			{user && user.userType === "patient" && <PatientDashboard />}
			{user && user.userType === "doctor" && <DoctorDashboard />}
		</div>
	)
}
