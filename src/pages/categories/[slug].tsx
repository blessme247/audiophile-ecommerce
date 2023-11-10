
import styles from "@/pages/categories/categories.module.scss";
import products from "@/data/products.json"
import { Product } from "@/types/product"
import Layout from "@/components/layout";

import ProductCategory from "@/components/Categories/ProductCategory";
import MainCategories from "@/components/Homepage/MainCategories";
import PreFooter from "@/components/PreFooter/PreFooter";
import PageHeader from "@/components/Categories/PageHeader";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";


export const getStaticPaths = async ()=>{
  
  //Return an array of objects where each object represent a route
  const paths = products.map(product=>{
      return {
          params: {slug: product.category}
      }
  })

  return {
      paths: paths,
      fallback: false //This enables redirect to 404 page when the user visits a route that does not exist
  }
}


export const getStaticProps = async (context:any)=>{
  const categorySlug = context.params.slug;
  const productsBelongingToCategory = products.filter((product) => product.category === categorySlug).reverse()

  return {
      props: { productsBelongingToCategory}
  }
}

const Category = ({productsBelongingToCategory}:{ productsBelongingToCategory: Product[] }) => {

  
  const {main, categoriesPage, components} = styles

  const router = useRouter()
  const pathSlug = router.query.slug?.toString().toUpperCase()

  useEffect(() => {
    router.prefetch('/products/xx99-mark-two-headphones')
    
  }, [router])


  return (
    <Layout>
      <>
      <Head> 
      <title >Audiophile | {pathSlug}</title>
      <meta name="description" content={`Shop from our varieties of ${pathSlug} category`} />
    </Head>
       <main className={main}>
        <section className={categoriesPage}>
        <PageHeader />
        {productsBelongingToCategory.map((product)=>{
            return (
                <ProductCategory product={product} />
            )
        })}
        <div className={components}>
        <MainCategories />
        <PreFooter />
        </div>
        </section>
       </main> 
       </>
    </Layout>
  )
}

export default Category