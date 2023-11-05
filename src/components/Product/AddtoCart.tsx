
import styles from "@/pages/products/product.module.scss";

const AddtoCart = () => {

    const {addtoCartButton} = styles
    
  return (
<button className={addtoCartButton}>ADD TO CART</button>
  )
}

export default AddtoCart