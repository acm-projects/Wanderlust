import { auth, googleProvider } from "../config/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	console.log(auth?.currentUser?.email);

	const signUpNewUsers = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			console.log("created new user & email login success");
		} catch (err) {
			console.log(err);
		}
	};

	const signUpExistingUsers = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log("email login success");
		} catch (err) {
			console.log(err);
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
			console.log("popup login success");
		} catch (err) {
			console.log(err);
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
			console.log("logout success");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<input
				placeholder="Email..."
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				placeholder="Password..."
				type="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={signIn}>Sign In</button>

			<button onClick={signInWithGoogle}>Sign In With Google</button>

			<button onClick={logout}>Logout</button>
		</div>
	);
};
