import { useQuery } from 'react-query'
import axios from 'axios'
import { T_Board } from '@/types/model/board'

const fetchBoard = async () => {
  const { data } = await axios.get<T_Board>('http://localhost:7777/board/list')
  return data
}

export function useFetchBoard() {
  return useQuery<T_Board>('board', fetchBoard, {
    staleTime: Infinity,
  })
}
