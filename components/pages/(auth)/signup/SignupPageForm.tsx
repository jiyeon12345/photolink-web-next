'use client'
import Button from '@/components/common/Button/Button'
import InputController from '@/components/common/Input/Controller'
import { useMemberAtom } from '@/states/useMemberAtom'
import { LoginFormInputs, loginSchema } from '@/utils/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

function SignupPageForm() {
  const { member } = useMemberAtom()

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
      <InputController name="email" control={control} placeholder="이메일" $size="md" />

      <InputController name="password" control={control} placeholder="동작하냐" $size="md" />

      <Button className="login-btn" $variant="primary" $size="md" type="submit">
        회원가입
      </Button>
    </form>
  )
}
export default SignupPageForm
