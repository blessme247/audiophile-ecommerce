import { Product } from "@/types/product"
import styles from "@/pages/products/product.module.scss";
import ProductQtyUpdate from "./ProductQtyUpdate";
import { ReducerAction, ReducerActionType } from "@/helpers/Context/CartProvider";
import useCart from "@/helpers/Hooks/useCart";
import { CartItemType } from "@/types/cart";

type PropsType = {
  dispatch: React.Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType,
}

const ProductDetails = ({product}:{ product: Product }) => {
    
    const {productDetails, left, desktopImage, mobileImage,  right, productBrief, productHeading, price, buttons, addtoCartButton, qtyUpdateButtons} = styles;

    const { dispatch, REDUCER_ACTIONS } = useCart()


    const addItemToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

    const increaseItemQty = (cartItem: CartItemType) => dispatch({ type: REDUCER_ACTIONS.INCREASE, payload: { ...cartItem, qty: 1 } })

    const decreaseItemQty = (cartItem: CartItemType) => dispatch({ type: REDUCER_ACTIONS.DECREASE, payload: { ...cartItem, qty: 1 } })

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
        <div className={qtyUpdateButtons}>
                {/* <button onClick={()=>decreaseItemQty(product)}>-</button>
                <span>{cartItem.qty}</span>
                <button onClick={()=>increaseItemQty(cartItem)} >+</button> */}
              </div>
      <button className={addtoCartButton} onClick={addItemToCart}>ADD TO CART</button>
      </div>
        </div>
    </div>
  )
}

export default ProductDetails