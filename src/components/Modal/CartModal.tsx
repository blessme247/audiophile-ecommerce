import styles from "@/components/Navbar/navbar.module.scss";
import useCart from "@/helpers/Hooks/useCart";
import { CSSProperties } from "react";
import emptyCartImage from "@/assets/images/empty-cart.webp"
import Image from "next/image";

interface CartStyleProp {
  style?: CSSProperties;
}

const CartModal = ({style}: CartStyleProp) => {

  const { cart } = useCart()

  const {cartWrapper, cartModal, cartContainer, emptyCart, imageWrapper, texts} = styles;

  return (
    <div className={cartWrapper} style={style}>
     <div className={cartModal}>
        <div className={cartContainer} >
          <div className={emptyCart}>
            <div className={imageWrapper}>
              <Image src={emptyCartImage} alt="empty cart image"/>
            </div>
            <h6>Cart is empty!</h6>
            <div className={texts}>
            <p>There is nothing in your cart.</p>
            <p>Add products to continue</p>
            </div>
          </div>
        
        </div>
    </div>
      </div>
  )
}

export default CartModal