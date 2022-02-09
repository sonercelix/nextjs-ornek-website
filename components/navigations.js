import Link from 'next/link'
function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Anasayfa | </a>
      </Link>
      <Link href="/about">
        <a>Hakkımda | </a>
      </Link>
      <Link href="/contact">
        <a>Iletisim</a>
      </Link>
    </nav>
  )
}

export default Navigation
