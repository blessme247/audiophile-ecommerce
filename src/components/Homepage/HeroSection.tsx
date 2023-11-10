"use-client"

import styles from "@/components/Homepage/homepage.module.scss"
import { useRouter } from "next/navigation"


const HeroSection = () => {

  const router = useRouter()

  const {heroSection,heroContent, heroTextContent, contentHeading, mainText, subText, productBtn} = styles

  return (
    <div className={heroSection}>
      <div className={heroContent}>
        <div className={heroTextContent}>
          <p className={contentHeading}>NEW PRODUCT</p>
          <h1 className={mainText}>
          XX99 MARK II HEADPHONES
          </h1>
          <p className={subText}>
          Experience natural, lifelike audio and exceptional <br /> build quality made for the passionate music <br /> enthusiast.
          </p>

          <button type="button" className={productBtn} onClick={() => router.push(`/products/xx99-mark-two-headphones`)}>
      See Product
    </button>
        </div>

      
      </div>
    </div>
  )
}

export default HeroSection