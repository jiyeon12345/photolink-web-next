'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from './common/Button/Button'
import { useModal, useResponsive } from '@/hooks'
import { isBrowser } from 'react-device-detect'
import Suspense from './Suspense'
import Skeleton from './common/Skeleton/Skeleton'
import Modals from './common/Modals/Modal'
import Tag from './common/Chip/Chip'
import Chip from './common/Chip/Chip'

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

  const { isMobile, isLaptop, isTablet, isDesktop, isSmallerThanDesktop } =
    useResponsive()
  useEffect(() => {
    setLoading(true)
    fetch('/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data)
        setLoading(false)
      })
  }, [])

  // // POST
  // const onSubmit = (data: TodoType) => {
  //   setLoading(true)
  //   fetch('/todos', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   }).then(() => {
  //     setValue('text', '') // reset the input field
  //     setLoading(false)
  //     fetch('/todos')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTodos(data)
  //       })
  //   })
  // }

  // //
  // const handleEdit = (todoId: any, todoText: any) => {
  //   setEditingTodoId(todoId)
  //   setValue('text', todoText) // fill the input field with the current todo text
  // }

  // // Put
  // const handleUpdate = (data: TodoType) => {
  //   setLoading(true)
  //   fetch(`todos/${editingTodoId}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   }).then((res) => {
  //     fetch('/todos')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setEditingTodoId(null)
  //         setValue('text', '') // reset the input field
  //         setTodos(data)
  //         setLoading(false)
  //       })
  //   })
  // }

  // // Delete
  // const handleDelete = (todoId: any) => {
  //   setLoading(true)
  //   fetch(`/todos/${todoId}`, {
  //     method: 'DELETE',
  //   }).then(() => {
  //     setLoading(false)
  //     fetch('/todos')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTodos(data)
  //       })
  //   })
  // }
  const { addModal } = useModal()

  const openModal = () => {
    addModal({ type: 'Test', props: {} })
  }
  return (
    <>
      {isSmallerThanDesktop && (
        <>
          <Suspense
            fallback={<Skeleton width="100%" height="100%" radius={10} />}
          >
            <Button type="button" $variant="secondary" $size="md">
              스켈레톤
            </Button>
          </Suspense>
        </>
      )}
      {isMobile && (
        <>
          <Button type="button" $variant="secondary" $size="md">
            Mobile
          </Button>
          <Skeleton width="100%" height="100%" radius={10} />
        </>
      )}
      {isMobile && (
        <Button type="button" $variant="secondary" $size="md">
          Mobile2
        </Button>
      )}
      {isTablet && (
        <Button type="button" $variant="secondary" $size="md">
          Tablet
        </Button>
      )}
      {isDesktop && (
        <Button type="button" $variant="secondary" $size="md">
          Desktop
        </Button>
      )}
      {isBrowser && (
        <Button type="button" $variant="secondary" $size="md">
          Browser
        </Button>
      )}
      <button onClick={openModal}>Open Modal</button>
      <Modals />
      <Chip $variant="red" label="test" />
      <Chip $variant="primary" label="test" />

      <Chip $variant="yellow" label="test" />
    </>
    // <div>
    //   {isTablet && <h2>할일 목록</h2>}

    //   {isDesktop && (
    //     <ul>
    //       {todos.map((todo, index) => (
    //         <li key={todo.id}>
    //           {editingTodoId === todo.id ? (
    //             <form onSubmit={handleSubmit(handleUpdate)}>
    //               {/* <Input
    //                 {...register('text', {
    //                   required: 'This field is required',
    //                 })}
    //                 type="text"
    //                 disabled={loading}
    //               /> */}
    //               {errors.text && <p>{errors.text.message}</p>}
    //               <Button type="submit" $variant="primary">
    //                 저장
    //               </Button>
    //               <Button
    //                 type="button"
    //                 $variant="secondary"
    //                 onClick={() => setEditingTodoId(null)}
    //               >
    //                 취소
    //               </Button>
    //             </form>
    //           ) : (
    //             <>
    //               {todo.text}
    //               <Button
    //                 type="button"
    //                 $variant="primary"
    //                 onClick={() => handleEdit(todo.id, todo.text)}
    //               >
    //                 수정
    //               </Button>
    //               <Button
    //                 type="button"
    //                 $variant="secondary"
    //                 onClick={() => handleDelete(todo.id)}
    //               >
    //                 삭제
    //               </Button>
    //             </>
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   )}

    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     {/* <Input
    //       {...register('text', { required: '에러다임마' })}
    //       type="text"
    //       placeholder="새로운 할일"
    //       error={errors.text?.message}
    //     /> */}

    //     {isTablet && (
    //       <Button type="submit" $variant="primary">
    //         추가
    //       </Button>
    //     )}
    //   </form>
    // </div>
  )
}
