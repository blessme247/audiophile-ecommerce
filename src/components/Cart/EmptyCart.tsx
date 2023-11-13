import Image from 'next/image'
import emptyCartImage from "@/assets/images/empty-cart.webp";
import styles from "@/components/Navbar/navbar.module.scss";


const EmptyCart = () => {

    const {emptyCart, imageWrapper, texts} = styles;
    
  return (
    <div className={emptyCart}>
    <div className={imageWrapper}>
      <Image src={emptyCartImage} alt="empty cart image" />
    </div>
    <h6>Cart is empty!</h6>
    <div className={texts}>
      <p>There is nothing in your cart.</p>
      <p>Add products to continue</p>
    </div>
  </div>
  )
}

export default EmptyCart