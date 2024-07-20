import { Product } from "@/types/product"
import styles from "@/pages/products/product.module.scss";
import ProductQtyUpdate from "./ProductQtyUpdate";
import useCart from "@/helpers/Hooks/useCart";
import { useState } from "react";


const ProductDetails = ({product}:{ product: Product }) => {
    
    const {productDetails, left, desktopImage, mobileImage,  right, productBrief, productHeading, price, buttons, addtoCartButton} = styles;

    const { dispatch, REDUCER_ACTIONS } = useCart()
    const [isInCart, setIsInCart] = useState(false)
    


    const addItemToCart = () => {
      dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: product.qty } })
      setIsInCart(true)
      setTimeout(() => {
        setIsInCart(false);
      }, 1000);
      
      
    }

  return (
    <div className={productDetails}>
        <div className={left}>
            <img src={product.image.desktop} alt={product.name} className={desktopImage} loading="lazy" />
            <img src={product.image.mobile} alt={product.name} className={mobileImage} loading="lazy" />
        </div>
        <div className={right}>
        {product.new && <p className={productHeading}>NEW PRODUCT</p>}
        <h2>{product.name}</h2>
        <p className={productBrief}>{product.description}</p>
        <h3 className={price}>$ {product.price.toLocaleString()}</h3>
        <div className={buttons}>
        <ProductQtyUpdate   />
      <button className={addtoCartButton} onClick={addItemToCart}>{isInCart ? "ADDED TO CART" : "ADD TO CART"}</button>
      </div>
        </div>
    </div>
  )
}

export default ProductDetails