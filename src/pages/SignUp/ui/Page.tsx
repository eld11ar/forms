import { SignUpForm } from "@/features/signUp"
import { WavesSvg } from "@/shared/ui/svgs/WavesSvg"

export const SignUpPage = () => {
	return (
		<>
			<title>Регистрация</title>

			<div className="relative z-20 min-h-screen flex justify-center items-center">
				<SignUpForm className="w-full max-w-md" />
			</div>

			<WavesSvg />
		</>
	)
}
