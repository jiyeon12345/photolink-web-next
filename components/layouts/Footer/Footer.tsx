import Link from 'next/link'

function Footer() {
  return (
    <footer className="pt-[40px] pb-[40px] bg-secondary-100">
      <nav>
        <ul className="flex text-dark">
          <li className="mr-[5px]">
            <Link href={'/'}>asdasdasda</Link>
          </li>
          <li className="mr-[5px]">
            <Link href={'/'}>asdasdasda</Link>
          </li>
          <li className="mr-[5px]">
            <Link href={'/'}>asdasdasda</Link>
          </li>
          <li className="mr-[5px]">
            <Link href={'/'}>asdasdasda</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
