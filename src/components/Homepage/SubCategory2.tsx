import styles from "@/components/Homepage/homepage.module.scss"
import Link from "next/link"

const SubCategory2 = () => {

    const {subCategory2, subCategoryDetails, productBtn} = styles
  return (
    <section className={subCategory2}>
        <div className={subCategoryDetails}>
            <h2>ZX7 SPEAKER</h2>
            <Link href="#" className={productBtn} >SEE PRODUCT</Link>
        </div>
    </section>
  )
}

export default SubCategory2