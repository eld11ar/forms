import { SignInForm } from "@/features/signIn"
import { WavesSvg } from "./WavesSvg"

export const SignInPage = () => {
	return (
		<>
			<title>Вход</title>

			<div className="relative z-20 min-h-screen flex justify-center items-center">
				<SignInForm className="w-full max-w-sm" />
			</div>

			<WavesSvg />
		</>
	)
}
