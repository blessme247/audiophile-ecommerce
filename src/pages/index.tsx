import Footer from '@/components/Footer/Footer'
import Categories from '@/components/Homepage/Categories'
import HeroSection from '@/components/Homepage/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    router.prefetch('/products/yx1-earphones')
    router.prefetch('/products/zx9-speakers')
    router.prefetch('/products/zx7-speakers')
  }, [router])

  return (
      <>
      <Head> 
      <title >Audiophile </title>
      <meta name="description" content={`One stop online shop for quality headphones, speakers and earphones`} />
    </Head>
      <section className='homeHero' >
        <Navbar style={{backgroundColor: "transparent"}}/>

      <HeroSection/>
      </section>
      <Categories />

      <Footer/>
      </>
    
  )
}
