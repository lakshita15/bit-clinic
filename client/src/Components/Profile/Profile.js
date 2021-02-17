import React, { useEffect, useState } from "react"
import firebase from "../../firebase"
import PatientProfile from "./Patient/Patient"
import DoctorProfile from "./Doctor/Doctor"

export default function Profile(props) {
	const [profile, updateProfile] = useState(null)
	useEffect(() => {
		const firebaseAuth = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				const uid = user.uid
				firebase
					.firestore()
					.collection("users")
					.doc(uid)
					.onSnapshot(
						snapshot => {
							if (snapshot.exists) updateProfile(snapshot.data())
							else updateProfile(null)
						},
						error => {
							updateProfile(null)
						}
					)
			} else {
				props.history.push("/login")
			}
		})
		return function cleanup() {
			if (firebaseAuth) firebaseAuth()
		}
	}, [profile, updateProfile])

	return (
		<div className='profile'>
			{profile && profile.userType === "patient" && (
				<PatientProfile profile={profile} />
			)}
			{profile && profile.userType === "doctor" && (
				<DoctorProfile profile={profile} />
			)}
		</div>
	)
}
