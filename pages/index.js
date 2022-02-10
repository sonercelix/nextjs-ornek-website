import Layout from '../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-fetch'
import Link from 'next/link'
import slug from 'slug'

function HomePage({ characters }) {
  console.log(characters)
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <h1>Ana sayfama hoşgeldin :)</h1>

      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link
              href="http://localhost:3000/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        h1 {
          background-color: blue;
          color: white;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps(context) {
  // data getch
  const data = await unfetch('https://rickandmortyapi.com/api/character')
  const characters = await data.json()
  return {
    props: {
      characters,
    }, // will be passed to the page component as props
  }
}

export default HomePage
