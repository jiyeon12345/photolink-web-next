import { T_Board } from '@/types/model/board'
import { atom, useAtom } from 'jotai'

const boardAtom = atom<T_Board | null>(null)

export const useBoardAtom = () => {
  const [board, setBoard] = useAtom(boardAtom)
  return { board, setBoard }
}
