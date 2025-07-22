import { createBrowserRouter } from "react-router"

function _GuestGuard() {}

export const appRouter = () => {
	return createBrowserRouter([
		{
			path: "sign-in",
			async lazy() {
				const { SignInPage } = await import("@/pages/SignIn")

				return {
					Component: SignInPage,
				}
			},
		},
		{
			path: "sign-up",
			async lazy() {
				const { SignUpPage } = await import("@/pages/SignUp")

				return {
					Component: SignUpPage,
				}
			},
		},
	])
}
