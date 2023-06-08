'use client'

import { useBoardAtom } from '@/hooks/useBoardAtom'
import axios from 'axios'
import { useMount } from 'react-use'

export default function ClientSideBoard() {
  //   const { data: boardData } = useFetchBoard()
  const { board, setBoard } = useBoardAtom()

  useMount(() => {
    const fetchBoard = async () => {
      try {
        const response = await axios.get('http://localhost:7777/board/list')
        setBoard(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchBoard()
  })

  return (
    <div>
      {board?.map((item) => (
        <div key={item.boardId}>
          <span>타이틀</span>
          <h1>{item.title}</h1>
          <span>작가</span>

          <h2>{item.writer}</h2>
          <span>내용</span>

          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}
