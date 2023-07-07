import { motion } from 'framer-motion'
import { styled } from 'styled-components'
import { flexbox } from '@/styles/utils/flexbox'

export const StyledModalOverlay = styled(motion.div)`
  ${flexbox()}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 200ms;
`

export const StyledModalWrapper = styled(motion.aside)`
  ${flexbox()}
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`
