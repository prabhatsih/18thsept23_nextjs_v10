import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Aside from '../components/Aside'
import Section from '../components/Section'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <Aside/>
        <Section/>
      </main>
      <Footer/>
    </div>
  )
}
