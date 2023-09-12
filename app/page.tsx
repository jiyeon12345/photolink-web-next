import Suspense from '@/components/Suspense'
import Footer from '@/components/layouts/Footer/Footer'
import Header from '@/components/layouts/Header/Header'

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      <main>
        <h1>asdas1</h1>
        <h2>asdas2</h2>
        <h3>asdas3</h3>
        <h4>asdas4</h4>
        <h5>asdas5</h5>
        <h6>asdas6</h6>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}
