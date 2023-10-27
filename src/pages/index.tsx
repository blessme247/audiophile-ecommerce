import HeroSection from '@/components/Homepage/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
   
      <section className='home' >
        <Navbar style={{backgroundColor: "inherit"}}/>

      <HeroSection/>
      </section>
    
  )
}
