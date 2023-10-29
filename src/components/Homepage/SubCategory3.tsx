import styles from "@/components/Homepage/homepage.module.scss"

import Earphones from "@/assets/images/yx1-mobile.webp";
import Image from "next/image";
import Link from "next/link";

const SubCategory3 = () => {

    const {subCategory3, left, right, productDetails, productBtn} = styles
  return (
    <section className={subCategory3}>
        <div className={left}>
        <Image src={Earphones} alt="earphones"/>
        </div>
        <div className={right}>
        <div className={productDetails}>
            <h2>YX1 EARPHONES</h2>
            <Link href="#" className={productBtn} >SEE PRODUCT</Link>
        </div>
        </div>
    </section>
  )
}

export default SubCategory3