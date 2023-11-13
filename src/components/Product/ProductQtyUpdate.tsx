
import { ReducerAction,ReducerActionType } from "@/helpers/Context/CartProvider";
import styles from "@/pages/products/product.module.scss";
import { CartItemType } from "@/types/cart";

type ProductQtyUpdateProps = {
  cartItem: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const ProductQtyUpdate = ({ cartItem, dispatch, REDUCER_ACTIONS }: ProductQtyUpdateProps) => {

    const {qtyUpdateButtons} = styles

    const increaseItemQty = () => dispatch({ type: REDUCER_ACTIONS.INCREASE, payload: { ...cartItem, qty: 1 } })

    const decreaseItemQty = () => dispatch({ type: REDUCER_ACTIONS.DECREASE, payload: { ...cartItem, qty: 1 } })

  return (
    <div className={qtyUpdateButtons}>
        <button onClick={decreaseItemQty}>-</button>
        <span>{cartItem.qty}</span>
        <button onClick={increaseItemQty} >+</button>
    </div>
  )
}

export default ProductQtyUpdate