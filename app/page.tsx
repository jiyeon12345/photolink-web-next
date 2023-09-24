import Suspense from '@/components/Suspense'
import Card from '@/components/common/Card/Card'
import Carousel from '@/components/common/Carousel/Carousel'
import Footer from '@/components/layouts/Footer/Footer'
import Header from '@/components/layouts/Header/Header'
import SecitonFirst from '@/components/pages/(main)/SectionFirst'

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      <main>
        {/* <Carousel>
          <Card src={image1} width={240} height={240} alt="이미지1" />
        </Carousel> */}

        <section className="section-first">
          <h2>뻔한 웨딩촬영은 NO! 둘 만의 이야기가 담긴 웨딩촬영👰🏻‍♀️🤵🏻‍♂️</h2>
          <SecitonFirst />
        </section>

        {/* <section className="section-second">
          <h2>홀로 찍는 나만의 인생샷✌🏻😁✌🏻</h2>
        </section>

        <section className="section-third">
          <h2>숨은 촬영 맛집 탐방! 슬기로운 작가생활📸</h2>
        </section> */}
      </main>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}
