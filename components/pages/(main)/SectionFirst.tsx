import Card from '@/components/common/Card/Card'
import wedding1 from '@/public/images/wedding1.jpg'

function SecitonFirst() {
  return (
    <Card width={80} height={80} src={wedding1} alt="이미지1">
      <div className="card-name">luvvaut_jeju</div>
      <div className="card-location">서울특별시</div>
      <div className="card-hash">
        #러바웃 #러바웃제주 #제주웨딩스냅 #웨딩스냅 #웨딩촬영 #제주웨딩촬영 #셀프웨딩촬영 #셀프웨딩 #웨딩사진
        #웨딩스냅촬영
      </div>
    </Card>
)
}

export default SecitonFirst
