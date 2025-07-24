import type { z } from "zod/v4"
import { signUpWithPasswordSchema } from "@/entities/auth"

export const signUpSchema = signUpWithPasswordSchema.extend({})
export type SignUpValue = z.infer<typeof signUpSchema>
