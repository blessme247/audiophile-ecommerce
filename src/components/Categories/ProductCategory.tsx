import styles from "@/pages/categories/categories.module.scss";
import { Product } from "@/types/product";
import { useRouter } from 'next/router'

const ProductCategory = ({ product }: { product: Product }) => {

  const router = useRouter()

  const {
    category,
    imageContainer,
    desktopImage,
    mobileImage,
    productDetailsContainer,
    productHeading,
    productBrief,
    navigationBtn
  } = styles;

  

  return (
    <div className={category}>
      <div className={imageContainer}>
        <img
          src={product.image.desktop}
          alt={product.name}
          className={desktopImage}
          loading="lazy"
        />
        <img
          src={product.image.mobile}
          alt={product.name}
          className={mobileImage}
          loading="lazy"
        />
      </div>
      <div className={productDetailsContainer}>
        {product.new && <p className={productHeading}>NEW PRODUCT</p>}
        
        <h2>{product.name}</h2>
        <p className={productBrief}>{product.description}</p>
        <button type="button" className={navigationBtn} onClick={() => router.push(`/products/${product.slug}`)}>
      See Product
    </button>
      </div>
    </div>
  );
};

export default ProductCategory;
