'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import Button from '@/components/common/Button/Button'
import InputController from '@/components/common/Input/Controller'

const shema = z.object({
  email: z.string().nonempty('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
  password: z
    .string()
    .min(1, '비밀번호를 입력해주세요.')
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
    .max(20, '비밀번호는 최소 20자 이하이어야 합니다.'),
})
type LoginFormInputs = z.infer<typeof shema>

function LoginPageForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(shema),
  })

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data)
  }
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputController name="email" control={control} type="email" placeholder="gotohome@n.asd.com" />

      <InputController name="password" control={control} type="password" placeholder="동작하냐" />

      <Button $variant="primary" $size="md" type="submit">
        로그인
      </Button>
    </form>
  )
}
export default LoginPageForm
