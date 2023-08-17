import {
  StyledAuthPageContainer,
  StyledAuthPageHeader,
} from '@/components/pages/(auth)/styled'

interface AuthLayoutProps {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <StyledAuthPageContainer>{children}</StyledAuthPageContainer>
}

export default AuthLayout
