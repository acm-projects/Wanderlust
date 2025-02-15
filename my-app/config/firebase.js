import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA5ZrYVRrZHV_VpqqApRCXdYyrVbqerWMw",
	authDomain: "wanderlust-4034a.firebaseapp.com",
	projectId: "wanderlust-4034a",
	storageBucket: "wanderlust-4034a.firebasestorage.app",
	messagingSenderId: "154095027336",
	appId: "1:154095027336:web:df03dd333eb577d7830b3d",
	measurementId: "G-LM55E24MY6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
