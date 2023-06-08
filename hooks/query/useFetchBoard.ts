import { useQuery } from 'react-query'
import axios from 'axios'
import { Board } from '@/types/board'

const fetchBoard = async () => {
  const { data } = await axios.get<Board>('http://localhost:7777/board/list')
  return data
}

export function useFetchBoard() {
  return useQuery<Board>('board', fetchBoard, {
    staleTime: Infinity,
  })
}
