import { z } from "zod/v4"

export const signInWithPasswordSchema = z.object({
	email: z.email().trim(),
	password: z.string().trim(),
})
export type SignInWithEmailAndPasswordRequest = z.infer<typeof signInWithPasswordSchema>

export const signUpWithPasswordSchema = signInWithPasswordSchema
	.extend({
		password: z.string().trim(),
		confirmPassword: z.string().trim(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		error: "Пароли не совпадают!",
		path: ["confirmPassword"],
	})
export type SignUpWithEmailAndPasswordRequest = z.infer<typeof signUpWithPasswordSchema>
