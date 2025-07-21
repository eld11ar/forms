import { z } from "zod/v4"

export const signInWithPasswordSchema = z.object({
	email: z.email().trim(),
	password: z.string().trim(),
})
export type signInWithEmailAndPasswordRequest = z.infer<typeof signInWithPasswordSchema>
