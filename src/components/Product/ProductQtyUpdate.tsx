
import useItemQuantity from "@/helpers/Hooks/useItemQuantity";
import styles from "@/pages/products/product.module.scss";



const ProductQtyUpdate = () => {

    const {qtyUpdateButtons} = styles


    const {itemQuantity, setItemQuantity} = useItemQuantity()


    const increaseItemQty = () => {
      setItemQuantity((prevValue)=> prevValue + 1)
    }

    const decreaseItemQty = () => {
      if (itemQuantity < 1) {
        setItemQuantity(1)
      }
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