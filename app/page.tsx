import Suspense from '@/components/Suspense'

import Footer from '@/components/layouts/Footer/Footer'
import Header from '@/components/layouts/Header/Header'
import SecitonFirst from '@/components/pages/(main)/SectionFirst'

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      <Suspense>
        <SecitonFirst />
      </Suspense>

      {/* <section className="section-second">
          <h2>홀로 찍는 나만의 인생샷✌🏻😁✌🏻</h2>
        </section>
        <section className="section-third">
          <h2>숨은 촬영 맛집 탐방! 슬기로운 작가생활📸</h2>
        </section> */}

      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}
