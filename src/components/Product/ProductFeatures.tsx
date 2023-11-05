import { Product } from "@/types/product"
import styles from "@/pages/products/product.module.scss";
import { splitText } from "@/utils/splitText";


const ProductFeatures = ({product}:{ product: Product }) => {

    const {productFeatures, left, right, featuresList} = styles

   const {firstPart, secondPart} = splitText(product.features)
   

  return (
    <div className={productFeatures}>
        <div className={left}>
            <h3>FEATURES</h3>
            <p>{firstPart} <br /> <br /> {secondPart}</p>
            
        </div>

        <div className={right}>
            <h3>IN THE BOX</h3>
            <ul className={featuresList}>
                {product.includes.map((item, i)=>{
                    return (
                        <li key={i}>
                        <span>{item.quantity}X</span>
                        <span>{item.item}</span>
                        </li> 
                    )
                })}
              
            </ul>
        </div>
    </div>
  )
}

export default ProductFeatures