'use client'

import client from '@/api/api'
import { useMount } from '@/hooks'
import { useBoardAtom } from '@/states/useBoardAtom'

export default function ClientSideBoard() {
  //   const { data: boardData } = useFetchBoard()
  const { board, setBoard } = useBoardAtom()

  const fetchBoard = async (setBoard: any) => {
    try {
      const response = await client.get('/board/list')
      setBoard(response.data)
    } catch (error) {
      console.error(error)
      // 필요하다면 사용자에게 오류 메시지 표시
    }
  }

  useMount(() => {
    fetchBoard(setBoard)
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
