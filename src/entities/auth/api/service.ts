import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/shared/api/firebase"
import type { SignInWithEmailAndPasswordRequest, SignUpWithEmailAndPasswordRequest } from "../model/schemes"

export const authService = {
	async signIn({ email, password }: SignInWithEmailAndPasswordRequest) {
		return await signInWithEmailAndPassword(auth, email, password)
	},

	async signUp({ email, confirmPassword }: SignUpWithEmailAndPasswordRequest) {
		return await createUserWithEmailAndPassword(auth, email, confirmPassword)
	},
}
