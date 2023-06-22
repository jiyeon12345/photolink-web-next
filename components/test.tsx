'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from './common/Button/Button'
import Pagination from './common/Pagination/Pagination'
import Input from './common/Input/Input'

type TodoType = {
  id: string
  text: string
  completed: boolean
}

export default function Test() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TodoType>()
  const [todos, setTodos] = useState<TodoType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null)

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
  const onSubmit = (data: TodoType) => {
    setLoading(true)
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      setValue('text', '') // reset the input field
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
    setValue('text', todoText) // fill the input field with the current todo text
  }

  // Put
  const handleUpdate = (data: TodoType) => {
    setLoading(true)
    fetch(`todos/${editingTodoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      fetch('/todos')
        .then((res) => res.json())
        .then((data) => {
          setEditingTodoId(null)
          setValue('text', '') // reset the input field
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
              <form onSubmit={handleSubmit(handleUpdate)}>
                <Input
                  {...register('text', { required: 'This field is required' })}
                  type="text"
                  disabled={loading}
                />
                {errors.text && <p>{errors.text.message}</p>}
                <Button type="submit" $variant="primary">
                  저장
                </Button>
                <Button
                  type="button"
                  $variant="secondary"
                  onClick={() => setEditingTodoId(null)}
                >
                  취소
                </Button>
              </form>
            ) : (
              <>
                {todo.text}
                <Button
                  type="button"
                  $variant="primary"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  수정
                </Button>
                <Button
                  type="button"
                  $variant="secondary"
                  onClick={() => handleDelete(todo.id)}
                >
                  삭제
                </Button>
              </>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('text', { required: '에러다임마' })}
          type="text"
          placeholder="새로운 할일"
          error={errors.text?.message}
        />

        <Button type="submit" $variant="primary">
          추가
        </Button>
      </form>
    </div>
  )
}
