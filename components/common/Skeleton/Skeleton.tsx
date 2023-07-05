import { StyledSkeleton } from './styled'

type SkeletonProps = {
  width?: string | number
  height?: string | number
  radius?: number
}
export const MOTION = {
  initial: 'initial',
  animate: 'animate',
}
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export default function Skeleton({
  width = '100%',
  height,
  radius = 8,
}: SkeletonProps) {
  const style = {
    width,
    height,
    borderRadius: radius,
  }

  return (
    <StyledSkeleton {...MOTION} variants={fadeIn} style={style} aria-hidden>
      <span className="gradient" />
    </StyledSkeleton>
  )
}
