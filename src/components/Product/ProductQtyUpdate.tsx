
import styles from "@/pages/products/product.module.scss";

const ProductQtyUpdate = () => {

    const {qtyUpdateButtons} = styles
  return (
    <div className={qtyUpdateButtons}>
        <button>-</button>
        <span>0</span>
        <button>+</button>
    </div>
  )
}

export default ProductQtyUpdate