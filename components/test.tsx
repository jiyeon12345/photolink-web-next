'use client'

import { useEffect, useState } from 'react'
import Button from './common/Button/Button'

type TodoType = {
  id: string
  text: string
  completed: boolean
}

export default function Test() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [todo, setTodo] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null)
  const [editingTodoText, setEditingTodoText] = useState<string>('')

  useEffect(() => {
    setLoading(true)
    fetch('/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data)
        setLoading(false)
      })
  }, [])

  // POST
  const handleSubmit = (event: any) => {
    event.preventDefault()
    setLoading(true)
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then(() => {
      setTodo('')
      setLoading(false)
      fetch('/todos')
        .then((res) => res.json())
        .then((data) => {
          setTodos(data)
        })
    })
  }

  //
  const handleEdit = (todoId: any, todoText: any) => {
    setEditingTodoId(todoId)
    setEditingTodoText(todoText)
  }

  // Put
  const handleUpdate = (event: any, todoId: any) => {
    event.preventDefault()
    setLoading(true)
    fetch(`todos/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: editingTodoText,
    }).then((res) => {
      fetch('/todos')
        .then((res) => res.json())
        .then((data) => {
          setEditingTodoId(null)
          setEditingTodoText('')
          setTodos(data)
          setLoading(false)
        })
    })
  }

  // Delete
  const handleDelete = (todoId: any) => {
    setLoading(true)
    fetch(`/todos/${todoId}`, {
      method: 'DELETE',
    }).then(() => {
      setLoading(false)
      fetch('/todos')
        .then((res) => res.json())
        .then((data) => {
          setTodos(data)
        })
    })
  }

  return (
    <div>
      <h2>할일 목록</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {editingTodoId === todo.id ? (
              <form onSubmit={(event) => handleUpdate(event, todo.id)}>
                <input
                  type="text"
                  name="todo"
                  value={editingTodoText}
                  onChange={({ target: { value } }) =>
                    setEditingTodoText(value)
                  }
                  disabled={loading}
                />
                <button disabled={!editingTodoText}>저장</button>
                <button type="button" onClick={() => setEditingTodoId(null)}>
                  취소
                </button>
              </form>
            ) : (
              <>
                {todo.text}
                <button
                  type="button"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  수정
                </button>
                <button type="button" onClick={() => handleDelete(todo.id)}>
                  삭제
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="새로운 할일"
          disabled={loading}
          value={todo}
          onChange={({ target: { value } }) => setTodo(value)}
        />
        <button disabled={!todo}>추가</button>
      </form>
      <Button className="w-[200px]" $variant="primary" $size="sm">
        Click me!
      </Button>
      <Button $variant="secondary" $size="md">
        Click me!
      </Button>
      <Button $variant="tertiary" $size="lg">
        Click me!
      </Button>
      <Button $variant="tertiary" $size="lg">
        Click me!
      </Button>
      <Button $variant="tertiary" $size="lg">
        test
      </Button>
      <Button>test</Button>
      <Button className="w-[200px]" $variant="primary" $size="lg">
        로그인
      </Button>
      <Button className="w-[200px]" $variant="secondary" $size="lg">
        로그아웃
      </Button>
      <Button className="w-[120px]" $variant="tertiary" $size="lg">
        testste
      </Button>
      <h1 className="mobile:hidden">모바밀에선 안보이고</h1>
      <h2 className="tablet:hidden">테스트를 해봅시다2</h2>
      <h3 className="desktop:hidden">테스트를 해봅시다3</h3>
    </div>
  )
}
