import Input from '@/components/common/Input/Input'
import SignupPageSocialButton from '@/components/pages/(auth)/SignupPageSocialButton'
import LoginPageForm from '@/components/pages/(auth)/login/LoginPageForm'
import Link from 'next/link'

function LoginPage() {
  return (
    <div className="container">
      <h1>포토링크 로그인</h1>

      <p className="text">포토링크에 돌아오신 것을 환영해요!</p>

      <LoginPageForm />

      <SignupPageSocialButton url="/" social="카카오 로그인" />
      <SignupPageSocialButton url="/" social="네이버 로그인" />
      <SignupPageSocialButton url="/" social="구글 로그인" />

      <p className="text login">
        <span>계정이 없으세요?</span>
        <Link href="/login">회원가입</Link>
      </p>

      <p className="text account">
        <Link href="/">비밀번호 재설정</Link>&nbsp;
        <Link href="/">계정 찾기</Link>
      </p>

      <p className="text guide">
        SNS로 로그인 및 회원가입 시 포토링크의&nbsp;
        <Link href="/" target="_blank" rel="noopener noreferrer">
          이용약관
        </Link>
        과&nbsp;
        <Link href="/" target="_blank" rel="noopener noreferrer">
          개인정보 수집 및 이용
        </Link>
        &nbsp;에 동의한 것으로 간주합니다.
      </p>
    </div>
  )
}

export default LoginPage
