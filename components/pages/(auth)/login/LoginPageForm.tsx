'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '@/components/common/Button/Button'
import InputController from '@/components/common/Input/Controller'
import { LoginFormInputs, loginSchema } from '@/utils/validation'
import { T_Member } from '@/types/model/member'
import { useMemberAtom } from '@/states/useMemberAtom'

function LoginPageForm() {
  const { member } = useMemberAtom() // Jotai 상태 가져오기

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: member, // 초기값으로 Jotai 상태 사용
    mode: 'all',
  })

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputController name="email" control={control} type="email" placeholder="gotohome@n.asd.com" $size="md" />

      <InputController name="password" control={control} type="password" placeholder="동작하냐" $size="md" />

      <Button $variant="primary" $size="md" type="submit">
        로그인
      </Button>
    </form>
  )
}
export default LoginPageForm
