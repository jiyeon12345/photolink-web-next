import { atomWithReset } from 'jotai/utils'

export const modalAtom = atomWithReset<Modal | null>(null)
