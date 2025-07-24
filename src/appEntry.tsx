import { RouterProvider } from "react-router"
import { appRouter } from "./appRouter"
import "@/shared/config/schema"
import { useAuth } from "@/entities/auth"

export const App = () => {
	useAuth()

	return <RouterProvider router={appRouter()} />
}
