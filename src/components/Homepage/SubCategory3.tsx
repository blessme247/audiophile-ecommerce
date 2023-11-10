

import styles from "@/components/Homepage/homepage.module.scss"

import Earphones from "@/assets/images/yx1-mobile.webp";
import Image from "next/image";
import { useRouter } from "next/router";

const SubCategory3 = () => {

  const router = useRouter()

  const {subCategory3, left, right, productDetails, productBtn, navigateBtn} = styles

  return (
    <section className={subCategory3}>
        <div className={left}>
        <Image src={Earphones} alt="earphones"/>
        </div>
        <div className={right}>
        <div className={productDetails}>
            <h2>YX1 EARPHONES</h2>
            <button type="button" className={navigateBtn}  onClick={() => router.push(`/products/yx1-earphones`)}>
      See Product
    </button>
        </div>
        </div>
    </section>
  )
}

export default SubCategory3