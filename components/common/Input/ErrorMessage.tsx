'use client'
import { slideInDown } from '@/styles/theme/motion'
import { AnimatePresence, motion } from 'framer-motion'
import { StyledErrorMessage } from './styled'

interface ErrorMessageProps {
  error?: string
}

function ErrorMessage({ error }: ErrorMessageProps) {
  const hasError = !!error

  return (
    <AnimatePresence>
      {hasError && (
        <StyledErrorMessage
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
          variants={slideInDown}
        >
          {error}
        </StyledErrorMessage>
      )}
    </AnimatePresence>
  )
}

export default ErrorMessage
