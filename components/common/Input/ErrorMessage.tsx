import { slideInDown } from '@/styles/theme/motion'
import { AnimatePresence, motion } from 'framer-motion'

interface ErrorMessageProps {
  error?: string
}

function ErrorMessage({ error }: ErrorMessageProps) {
  const hasError = !!error
  const errorClasses = `text-red-500`

  return (
    <AnimatePresence>
      {hasError && (
        <motion.p
          className={errorClasses}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
          variants={slideInDown}
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  )
}

export default ErrorMessage
