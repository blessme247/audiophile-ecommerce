import { ReducerAction, ReducerActionType } from "@/helpers/Context/CartProvider";
import useCart from "@/helpers/Hooks/useCart";
import useItemQuantity from "@/helpers/Hooks/useItemQuantity";
import styles from "@/pages/products/product.module.scss";
import { CartItemType } from "@/types/cart";
import { Product } from "@/types/product";

type ProductQtyUpdateProps = {
  product: Product;
  isInCart?: boolean
};

const ProductQtyUpdate = ({ product, isInCart }: ProductQtyUpdateProps) => {

    const {qtyUpdateButtons} = styles

    const { cart } = useCart();

    const {itemQuantity, setItemQuantity} = useItemQuantity()

    let slug = product.slug

    const itemExists: CartItemType | undefined = cart.find(item => item.slug === slug)


    const increaseItemQty = () => {
      setItemQuantity((prevValue)=> prevValue + 1)
    }

    const decreaseItemQty = () => {
      setItemQuantity((prevValue)=> prevValue - 1)
    };

  return (
    <div className={qtyUpdateButtons}>
        <button onClick={decreaseItemQty}>-</button>
        <span>{ itemQuantity}</span>
        <button onClick={increaseItemQty} >+</button>
    </div>
  )
}

export default ProductQtyUpdate