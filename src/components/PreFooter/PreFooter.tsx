import styles from "@/components/PreFooter/prefooter.module.scss"
import style from "@/components/Homepage/homepage.module.scss"
import Image from "next/image"
import manImage from "@/assets/images/cta-desktop.webp"

const PreFooter = () => {

    const {preFooter, left, right} = styles
    const {subText} = style

    return (
      <section className={preFooter}>
          <div className={left}>
            <h2>BRINGING YOU THE  <span>BEST</span> AUDIO GEAR</h2>
            <p className={subText} style={{color: "#00000080", marginBottom: "0px", marginTop: "1.5rem"}}>
            Located at the heart of New York City, Audiophile is the premier  
            store for high end headphones, earphones, speakers, and audio 
             accessories. We have a large showroom and luxury 
             demonstration rooms available for you to browse and 
             experience a wide range of our products. Stop by our store to 
              meet some of the fantastic people who make Audiophile
             the <br /> best place to buy your portable audio equipment.
            </p>
          </div>
          <div className={right}>
            <Image src={manImage} alt="guy holding his headphones"/>
          </div>
      </section>
    )
  }
  
  export default PreFooter