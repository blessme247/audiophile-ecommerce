import Footer from '@/components/Footer/Footer'
import Categories from '@/components/Homepage/Categories'
import HeroSection from '@/components/Homepage/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
      <>
      <section className='homeHero' >
        <Navbar style={{backgroundColor: "transparent"}}/>

      <HeroSection/>
      </section>
      <Categories />

      <Footer/>
      </>
    
  )
}
