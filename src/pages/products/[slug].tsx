import PreFooter from "@/components/PreFooter/PreFooter"
import Layout from "@/components/layout"
import products from "@/data/products.json"
import { Product } from "@/types/product"
import styles from "@/pages/products/product.module.scss";
import { useRouter } from 'next/router';
import ProductDetails from "@/components/Product/ProductDetails";

export const getStaticPaths = async ()=>{
  
  //Return an array of objects where each object represent a route
  const paths = products.map(product=>{
      return {
          params: {slug: product.slug}
      }
  })

  return {
      paths: paths,
      fallback: false //This enables redirect to 404 page when the user visits a route that does not exist
  }
}


export const getStaticProps = async (context:any)=>{
  const productSlug = context.params.slug;
  const product = products.find((product) => product.slug === productSlug) as Product

  return {
      props: { product}
  }
}

const Product = ({product}:{ product: Product }) => {

  const {main, productWrapper, backButton} = styles

  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  };

  return (
    <Layout>
      <main className={main}>
      <div className={productWrapper}>
      <button onClick={handleGoBack} className={backButton}>Go back</button>
      <ProductDetails product={product}/>
      <PreFooter/>
      </div>
      </main>
      
    </Layout>
  )
}

export default Product