import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
	apiKey: "AIzaSyDvbEjlNa2n4KoG6f2Q-h1dqgC3M9u-aiM",
	authDomain: "forms-8679c.firebaseapp.com",
	projectId: "forms-8679c",
	storageBucket: "forms-8679c.firebasestorage.app",
	messagingSenderId: "1069062141941",
	appId: "1:1069062141941:web:3f90c48c581ba11d8e92bc",
	measurementId: "G-3L70HHSQCM",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const analytics = getAnalytics(app)
const _db = getFirestore(app)

export { app, auth, analytics }
