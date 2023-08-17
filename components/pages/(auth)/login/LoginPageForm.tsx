'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import Button from '@/components/common/Button/Button'

const shema = z.object({
  email: z.string().email('이메일 형식이 아닙니다.'),
  password: z
    .string()
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
    mode: 'onChange', // 입력이 변경될떄마다 유효성 검사 실행
  })

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => <input type="text" {...field} />}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <Controller
        name="password"
        control={control}
        render={({ field }) => <input type="password" {...field} />}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <Button $variant="primary" $size="md" type="submit">
        로그인
      </Button>
    </form>
  )
}
export default LoginPageForm
