import Navigation from '../components/navigations'
import Head from 'next/head'
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Soner Çelik'in web sitesi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main style={{ minHeight: '500px' }}>{children}</main>
      <footer style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>
        Design by Soner
      </footer>
    </div>
  )
}

export default Layout
