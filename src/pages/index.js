import Image from 'next/image'
import Header from '@/components/Header'
import Head from 'next/head'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Amazon 2.0 (Clone)</title>
    </Head>

    <Header />

    <main className='max-w-screen-2xl '>

    {/* Banner */}
    <Banner />

    {/* Product Feed  */}
    
    </main>
    </div>
  )
}
