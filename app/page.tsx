import Suspense from '@/components/Suspense'
import Button from '@/components/common/Button/Button'
import { useResponsive } from '@/hooks'

export default function Home() {
  return (
    <main>
      <h1>asdas1</h1>
      <h2>asdas2</h2>
      <h3>asdas3</h3>
      <h4>asdas4</h4>
      <h5>asdas5</h5>
      <h6>asdas6</h6>
      <Suspense>
        <Button $size="sm" $contain>
          로그인
        </Button>
      </Suspense>

      <Button $size="md" $variant="secondary" $contain>
        로그인
      </Button>
      <Button $size="lg" $variant="tertiary" $contain>
        로그인
      </Button>
    </main>
  )
}
