'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '@/components/common/Button/Button'
import InputController from '@/components/common/Input/Controller'
import { LoginFormInputs, loginSchema } from '@/utils/validation'

function LoginPageForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
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
