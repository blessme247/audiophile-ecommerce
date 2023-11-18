import styles from "@/components/Navbar/navbar.module.scss";
import useCart from "@/helpers/Hooks/useCart";
import { CSSProperties, useState } from "react";
import FilledCartList from "../Cart/FilledCartList";
import EmptyCart from "../Cart/EmptyCart";
import EmailModal from "../Cart/EmailModal";

interface CartStyleProp {
  style?: CSSProperties;
}

const CartModal = ({ style }: CartStyleProp) => {
  const { cart } = useCart();
  const [openCheckout, setOpenCheckout] = useState<Boolean>(false)

  const {cartWrapper, cartModal, cartContainer} = styles;

  return (
    <div className={cartWrapper} style={style}  >
      <div className={cartModal} >
        <div className={cartContainer}>
          {cart.length == 0 ? (
            <EmptyCart />
          ) : (cart.length >= 1 && !openCheckout ) ?  (
            <FilledCartList setOpenCheckout={setOpenCheckout} />
          ) : <EmailModal />
        }
          
        </div>
      </div>
    </div>
  );
};

export default CartModal;
