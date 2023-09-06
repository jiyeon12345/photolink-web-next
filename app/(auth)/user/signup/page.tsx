import SignupPageSocialButton from '@/components/pages/(auth)/SignupPageSocialButton'
import SignupPageForm from '@/components/pages/(auth)/signup/SignupPageForm'
import Link from 'next/link'

function SignupPage() {
  return (
    <div className="container">
      <h1>포토링크 회원가입</h1>

      <p className="text">
        우리의 플랫폼에서는 누구나 포토그래퍼와 직접 연결할 수 있습니다. 당신의 이벤트나 특별한 순간을 완벽하게 담아줄
        전문 포토그래퍼를 찾고 계시다면, 지금 바로 시작해보세요! 팬이라면 좋아하는 포토그래퍼를 구독하고 지원할 수도
        있습니다. 함께 창조적인 여정을 떠나보세요.
      </p>

      <div className="checkbox-text">
        <div>x</div>
        <p className="text checkbox">만 14세 이상입니다.</p>
      </div>

      <SignupPageSocialButton url="/" social="카카오로 회원가입" />
      <SignupPageSocialButton url="/" social="네이버로 회원가입" />
      <SignupPageSocialButton url="/" social="구글로 회원가입" />

      <SignupPageForm />

      <p className="text login">
        <span>이미 계정이 있으세요?</span>
        <Link href="/login">로그인</Link>
      </p>

      <p className="text account">
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

export default SignupPage
