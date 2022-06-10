import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cian Butler | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

     
    </div>
  )
}
