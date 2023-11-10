"use-client"

import styles from "@/components/Homepage/homepage.module.scss"
import { useRouter } from "next/router"


const SubCategory2 = () => {

  const router = useRouter()

  const {subCategory2, subCategoryDetails, navigateBtn} = styles

  return (
    <section className={subCategory2}>
        <div className={subCategoryDetails}>
            <h2>ZX7 SPEAKER</h2>
            <button type="button" className={navigateBtn} onClick={() => router.push(`/products/zx7-speakers`)}>
      See Product
    </button>
        </div>
    </section>
  )
}

export default SubCategory2