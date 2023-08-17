'use client'

import { StyledSocialAnchor } from '@/components/pages/(auth)/styled'

interface SignupPageButtonProps {
  url?: string
  social?: string
}

function SignupPageSocialButton({ url, social }: SignupPageButtonProps) {
  return <StyledSocialAnchor href={url}>{social}</StyledSocialAnchor>
}

export default SignupPageSocialButton
