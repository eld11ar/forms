import type { z } from "zod/v4"
import { signInWithPasswordSchema } from "@/entities/auth"

export const signInSchema = signInWithPasswordSchema.extend({})
export type SignInValue = z.infer<typeof signInSchema>
