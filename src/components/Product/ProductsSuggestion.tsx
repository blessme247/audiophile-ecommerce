import styles from "@/pages/products/product.module.scss";
import { Product } from "@/types/product";
import Link from "next/link";

const ProductsSuggestions = ({product}:{ product: Product }) => {

    const {suggestions, products, suggestion, imageWrapper, desktopImage, mobileImage, details} = styles;

  return (
    <div className={suggestions}>
        <h3>YOU MAY ALSO LIKE</h3>

        <div className={products}>
        {product.others.map((item, i)=>{
            return (
               <div key={i} className={suggestion}>
                <div className={imageWrapper}>
                <img src={item.image.desktop} alt={item.slug} className={desktopImage} />
                <img src={item.image.mobile} alt={item.slug} className={mobileImage} />
                </div>
                <div className={details}>
                <h3>{item.name}</h3>
                <Link href={item.slug}>SEE PRODUCT</Link>
                </div>
               </div>
            )
        })}
        </div>
    </div>
  )
}

export default ProductsSuggestions