import { Board } from '@/types/board'
import { atom, useAtom } from 'jotai'

const boardAtom = atom<Board | null>(null)

export const useBoardAtom = () => {
  const [board, setBoard] = useAtom(boardAtom)
  return { board, setBoard }
}
