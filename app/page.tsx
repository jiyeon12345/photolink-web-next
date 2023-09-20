import Suspense from '@/components/Suspense'
import Card from '@/components/common/Card/Card'
import Carousel from '@/components/common/Carousel/Carousel'
import Footer from '@/components/layouts/Footer/Footer'
import Header from '@/components/layouts/Header/Header'

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      <main>
        <div>여기까지할래 </div>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}
