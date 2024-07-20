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
  const [openCheckout, setOpenCheckout] = useState<boolean>(false);

  const { cartWrapper, cartModal, cartContainer } = styles;

  const renderCartContent = () => {
    if (cart.length === 0) {
      return <EmptyCart />;
    } else if (cart.length >= 1 && !openCheckout) {
      return <FilledCartList setOpenCheckout={setOpenCheckout} />;
    } else {
      return <EmailModal />;
    }
  };

  return (
    <div className={cartWrapper} style={style}>
      <div className={cartModal}>
        <div className={cartContainer}>{renderCartContent()}</div>
      </div>
    </div>
  );
};

export default CartModal;
