import { z } from "zod/v4"
import { regexes } from "@/shared/config/regexes"

export const ERRORS = {
	email: {
		invalid: "Некорректный формат email",
	},
	password: {
		required: "Введите пароль",
		min: "Пароль должен быть не короче 8 символов",
		max: "Пароль должен быть не длиннее 25 символов",
		weak: "Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ",
	},
	confirmPassword: {
		mismatch: "Пароли не совпадают",
	},
}

export const signInWithPasswordSchema = z.object({
	email: z.email(ERRORS.email.invalid).trim(),
	password: z
		.string({ error: ERRORS.password.required })
		.min(8, ERRORS.password.min)
		.max(25, ERRORS.password.max)
		.trim(),
})
export type SignInWithEmailAndPasswordRequest = z.infer<typeof signInWithPasswordSchema>

export const signUpWithPasswordSchema = signInWithPasswordSchema
	.extend({
		password: z.string({ error: ERRORS.password.required }).regex(regexes.password, ERRORS.password.weak).trim(),

		confirmPassword: z.string().trim(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: ERRORS.confirmPassword.mismatch,
	})
export type SignUpWithEmailAndPasswordRequest = z.infer<typeof signUpWithPasswordSchema>
