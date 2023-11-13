import styles from "@/components/Navbar/navbar.module.scss";
import useCart from "@/helpers/Hooks/useCart";
import { CSSProperties } from "react";
import FilledCartList from "../Cart/FilledCartList";
import EmptyCart from "../Cart/EmptyCart";

interface CartStyleProp {
  style?: CSSProperties;
}

const CartModal = ({ style }: CartStyleProp) => {
  const { cart } = useCart();

  const {cartWrapper, cartModal, cartContainer} = styles;

  return (
    <div className={cartWrapper} style={style}>
      <div className={cartModal}>
        <div className={cartContainer}>
          {cart.length == 0 ? (
            <EmptyCart />
          ) : (
            <FilledCartList />
          )}
          
        </div>
      </div>
    </div>
  );
};

export default CartModal;
