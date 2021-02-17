import firebase from "firebase/app"
import "firebase/firebase-auth"
import "firebase/firebase-firestore"

const firebaseConfig = {
	apiKey: "AIzaSyAtJ7Yu6tLG0Lp6T0EhFXoRqh22bn3ZZ8E",
	authDomain: "bti-clinic.firebaseapp.com",
	projectId: "bti-clinic",
	storageBucket: "bti-clinic.appspot.com",
	messagingSenderId: "535215438879",
	appId: "1:535215438879:web:abdd624dd3ebcc188da92a",
	measurementId: "G-XJHMXEMRZQ",
}

firebase.initializeApp(firebaseConfig)

export { firebase as default }
