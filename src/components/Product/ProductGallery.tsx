import styles from "@/pages/products/product.module.scss";
import { Product } from "@/types/product";

const ProductGallery = ({product}:{ product: Product }) => {

    const {productGallery, firstImage, secondImage, thirdImage, desktopImage, mobileImage} = styles;

  return (
    <section className={productGallery}>
      <div className={firstImage}>
        <img src={product.gallery.first.desktop} alt={product.name} className={desktopImage} loading="lazy" />
        <img src={product.gallery.first.mobile} alt={product.name} className={mobileImage} loading="lazy" />

      </div>

      <div className={secondImage}>
      <img src={product.gallery.second.desktop} alt={product.name} className={desktopImage} loading="lazy" />
      <img src={product.gallery.second.mobile} alt={product.name} className={mobileImage} loading="lazy" />
      </div>

      <div className={thirdImage}>
      <img src={product.gallery.third.desktop} alt={product.name} className={desktopImage} loading="lazy" />
      <img src={product.gallery.third.mobile} alt={product.name} className={mobileImage} loading="lazy" />
      </div>
    </section>
  )
}

export default ProductGallery