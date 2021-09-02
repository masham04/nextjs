import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next App Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1>Next js Development</h1>
      </div>

    </div>
  )
}
