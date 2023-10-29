import styles from "@/components/Homepage/homepage.module.scss"
import Image from "next/image"
import Speakers from "@/assets/images/zx9-desktop.webp";
import Link from "next/link";

const SubCategory1 = () => {

    const {subCategory1, subCategoryContent, productBtn, mainText, left, right, subText} = styles
  return (
    <section className={subCategory1}>
      <div className={subCategoryContent}>
        <div className={left}>
          <Image src={Speakers} alt="speakers"/>
        </div>
      <div className={right}>
          <h1 className={mainText}>ZX9 <br /> SPEAKERS</h1>
          <p className={subText}>Upgrade to premium speakers that are <br /> 
          phenomenally built to deliver truly remarkable <br /> 
          sound.</p>
          <Link href="#" className={productBtn} style={{backgroundColor: "#000"}}>SEE PRODUCT</Link>
        </div>
      </div>

    </section>
  )
}

export default SubCategory1