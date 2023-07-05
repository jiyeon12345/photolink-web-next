import { motion } from 'framer-motion'
import styled from 'styled-components'
import { flexbox } from '@/styles/utils/flexbox'

export const StyledSkeleton = styled(motion.span)`
  ${flexbox('start')};
  overflow: hidden;
  background: var(--tertiary-500);
  filter: grayscale(100%) blur(5px);
  animation: develop 5s ease forwards;

  .gradient {
    display: block;
    width: 200%;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      rgba(33, 35, 34, 0.1) 0%,
      rgba(33, 35, 34, 0.5) 100%
    );
    animation: move 1s infinite;
  }

  @keyframes move {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      transform: translate3d(100%, 0, 0);
    }
  }

  @keyframes develop {
    0% {
      filter: grayscale(100%) blur(5px);
    }

    100% {
      filter: grayscale(0%) blur(0);
    }
  }
`
