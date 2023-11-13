import styles from "@/components/Navbar/navbar.module.scss";
import useCart from "@/helpers/Hooks/useCart";
import { CartItemType } from "@/types/cart";

const FilledCartList = () => {

  const { totalPrice, cart, REDUCER_ACTIONS, dispatch } = useCart();

  const clearCart = () => dispatch({ type: REDUCER_ACTIONS.removeAll })

  const inceaseItemQty = (cartItem: CartItemType) => dispatch({ type: REDUCER_ACTIONS.INCREASE, payload: { ...cartItem, qty: 1 } })

  const {
    filledCart,
    top,
    checkoutBtnWrapper,
    cartList,
    item,
    itemLeft,
    itemImageWrapper,
    itemDetails,
    qtyUpdateButtons,
    totalSection
  } = styles;

  return (
    <div className={filledCart}>
      <div className={top}>
        <h6>CART ({cart.length})</h6>
        <button onClick={clearCart}>Remove all</button>
      </div>
      <div className={cartList}>
        {cart.map((cartItem) => {
          return (
            <div key={cartItem.shortName} className={item}>
              <div className={itemLeft}>
                <div className={itemImageWrapper}>
                  <img src={cartItem.image.mobile} alt={cartItem.name} />
                </div>
                <div className={itemDetails}>
                  <p>{cartItem.shortName}</p>
                  <p>$ {cartItem.price.toLocaleString()}</p>
                </div>
              </div>
              <div className={qtyUpdateButtons}>
                <button>-</button>
                <span>{cartItem.qty}</span>
                <button onClick={()=>inceaseItemQty(cartItem)} >+</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={totalSection}>
        <p>TOTAL</p>
        <p>{totalPrice}</p>
      </div>
      <div className={checkoutBtnWrapper}>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default FilledCartList;
