import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/shared/api/firebase"
import type { signInWithEmailAndPasswordRequest } from "../model/schemes"

export const authService = {
	async signInWithPassword({ email, password }: signInWithEmailAndPasswordRequest) {
		return await signInWithEmailAndPassword(auth, email, password)
	},
}
