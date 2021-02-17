import React, { useState, useEffect } from "react"
import firebase from "../../../firebase"
import "./Patient.scss"
import patient from "../../../Images/DoctorProfile.jpg"
import Doctor from "../../../Images/doc.jpg"

export default function PatientDashboard(props) {
	const [doctors, updateDoctors] = useState([])
	const [user, updateUser] = useState({})

	useEffect(() => {
		firebase
			.firestore()
			.collection("users")
			.where("userType", "==", "doctor")
			.where("isProfileComplete", "==", true)
			.onSnapshot(snapshot => {
				let doctors = []
				snapshot.forEach(doc => doctors.push(doc.data()))
				updateDoctors(doctors)
			})
	}, [updateDoctors])

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
								if (snapshot.exists) {
									updateUser(snapshot.data())
								} else firebase.auth().signOut()
							},
							error => console.log(error)
						)
				} else {
					props.history.push("/login")
				}
			},
			error => console.log(error)
		)
	}, [updateUser])

	return (
		<React.Fragment>
			<div className='Container'>
				<div className='SideBar'>
					{user && (
						<>
							<div className='PatientImage'>
								<img src={patient} alt='patient'></img>
							</div>
							<div className='PatientName'>
								Name : {user.name}
							</div>
							<div className='Sidebar-links'>
								<li>Age : {user.age}</li>
								<li>Gender : {user.gender}</li>
							</div>
						</>
					)}
				</div>
				<div className='doctorcontainer'>
					{doctors.map(doc => (
						<div className='doctorr'>
							<div className='DoctorDetails'>
								<div className='DoctorImage'>
									<img src={Doctor} alt='Doctor'></img>
								</div>
								<div className='DoctorName'>
									Name: {doc.name}
								</div>
								<div className='DoctorAge'>Age : {doc.age}</div>
								<div className='specialization'>
									Specialization :{" "}
									{doc.specialization || "none"}
								</div>
								<div className='gender'>
									Gender : {doc.gender}
								</div>
								<button className='appointment'>
									Book Appointment
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</React.Fragment>
	)
}
