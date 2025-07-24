import { onAuthStateChanged } from "firebase/auth"
import { useSetAtom } from "jotai/react"
import { useEffect } from "react"
import { auth } from "@/shared/api/firebase"
import { authAtom } from "../model/atoms"

export const useAuth = () => {
	const setAuth = useSetAtom(authAtom)

	// biome-ignore lint/correctness/useExhaustiveDependencies: setAuth
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setAuth(currentUser)
		})

		return () => {
			unsubscribe()
		}
	}, [])
}
