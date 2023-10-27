import styles from "@/components/Homepage/homepage.module.scss"
import Image from "next/image"
import Link from "next/link"


const HeroSection = () => {

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

          <Link href="#" className={productBtn}>SEE PRODUCT</Link>
        </div>

      
      </div>
    </div>
  )
}

export default HeroSection