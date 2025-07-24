import type { User } from "firebase/auth"
import { atomWithStorage } from "jotai/utils"
import { STORAGE_START_KEY } from "@/shared/config/localStorage"

const KEY = `${STORAGE_START_KEY}:auth`

export const authAtom = atomWithStorage<Nullable<User>>(KEY, null)
