import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
            <h1>Header</h1>
        </header>
        <main>
            <aside>
                <h2>Sidebar</h2>
            </aside>
            <section>
                <h2>Content</h2>
            </section>
        </main>
        <footer>
            <h1>Footer</h1>
        </footer>
    </div>
  )
}
