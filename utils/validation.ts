import { z } from 'zod'

// * 로그인 스키마
export const loginSchema = z.object({
  email: z.string().nonempty('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
  password: z
    .string()
    .nonempty('비밀번호를 입력해주세요.')
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
    .max(16, '비밀번호는 최대 16자 이하이어야 합니다.'),
})

export type LoginFormInputs = z.infer<typeof loginSchema>
