import Layout from '../../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-fetch'
import Link from 'next/link'
import slug from 'slug'

function CharacterDetail({ character }) {
  console.log(character)
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      {character.name}
      {character.gender}
      <figure>
        <img src={character.image} />
      </figure>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character')
  const characters = await data.json()

  return {
    paths: characters.results.map((character) => {
      return { params: { slug: `${slug(character.name)}-${character.id}` } }
    }),
    fallback: false, // false or 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]
  const data = await unfetch('https://rickandmortyapi.com/api/character/' + id)
  const character = await data.json()
  return {
    props: {
      character,
    }, // will be passed to the page component as props
  }
}

export default CharacterDetail
