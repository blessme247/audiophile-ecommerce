import { Product } from "@/types/product"
import styles from "@/pages/products/product.module.scss";

const ProductDetails = ({product}:{ product: Product }) => {
    
    const {productDetails, left, right, productBrief, productHeading, price} = styles;
  return (
    <div className={productDetails}>
        <div className={left}>
            <img alt={product.name} src={product.image.desktop} loading="lazy" />
        </div>
        <div className={right}>
        <p className={productHeading}>NEW PRODUCT</p>
        <h2>{product.name}</h2>
        <p className={productBrief}>{product.description}</p>
        <h3 className={price}>$ {product.price.toLocaleString()}</h3>
        </div>
    </div>
  )
}

export default ProductDetails