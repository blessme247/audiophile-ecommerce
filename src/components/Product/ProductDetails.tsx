import { Product } from "@/types/product"
import styles from "@/pages/products/product.module.scss";
import ProductQtyUpdate from "./ProductQtyUpdate";
import AddtoCart from "./AddtoCart";

const ProductDetails = ({product}:{ product: Product }) => {
    
    const {productDetails, left, desktopImage, mobileImage,  right, productBrief, productHeading, price, buttons} = styles;

  return (
    <div className={productDetails}>
        <div className={left}>
            <img src={product.image.desktop} alt={product.name} className={desktopImage} loading="lazy" />
            <img src={product.image.mobile} alt={product.name} className={mobileImage} loading="lazy" />
        </div>
        <div className={right}>
        {product.new == true && <p className={productHeading}>NEW PRODUCT</p>}
        <h2>{product.name}</h2>
        <p className={productBrief}>{product.description}</p>
        <h3 className={price}>$ {product.price.toLocaleString()}</h3>
        <div className={buttons}>
      <ProductQtyUpdate/>
      <AddtoCart/>
      </div>
        </div>
    </div>
  )
}

export default ProductDetails