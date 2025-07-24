import { useAtomValue } from "jotai/react"
import type { ReactNode } from "react"
import { createBrowserRouter, Navigate } from "react-router"
import { authAtom } from "@/entities/auth"
import { Layout } from "@/widgets/Layout"

// TODO: loader
type GuestGuardProps = {
	children: ReactNode
}

function GuestGuard({ children }: GuestGuardProps) {
	const auth = useAtomValue(authAtom)

	return !auth ? <Navigate to="/sign-in" replace /> : children
}

type AuthGuardProps = {
	children: ReactNode
}

function AuthGuard({ children }: AuthGuardProps) {
	const auth = useAtomValue(authAtom)

	return auth ? <Navigate to="/" replace /> : children
}

export const appRouter = () => {
	return createBrowserRouter([
		{
			path: "/",
			element: (
				<GuestGuard>
					<Layout />
				</GuestGuard>
			),
			errorElement: <div>Ошибка</div>,
			children: [
				{
					index: true,
					async lazy() {
						const { MainPage } = await import("@/pages/Main")

						return {
							element: <MainPage />,
						}
					},
				},
			],
		},
		{
			path: "sign-in",
			async lazy() {
				const { SignInPage } = await import("@/pages/SignIn")

				return {
					element: (
						<AuthGuard>
							<SignInPage />
						</AuthGuard>
					),
				}
			},
		},
		{
			path: "sign-up",
			async lazy() {
				const { SignUpPage } = await import("@/pages/SignUp")

				return {
					element: (
						<AuthGuard>
							<SignUpPage />
						</AuthGuard>
					),
				}
			},
		},
	])
}
