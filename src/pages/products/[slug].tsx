"use client"

import PreFooter from "@/components/PreFooter/PreFooter"
import Layout from "@/components/layout"
import products from "@/data/products.json"
import { Product } from "@/types/product"
import styles from "@/pages/products/product.module.scss";
import { useRouter } from 'next/router';
import ProductDetails from "@/components/Product/ProductDetails";
import ProductFeatures from "@/components/Product/ProductFeatures";
import ProductGallery from "@/components/Product/ProductGallery";
import ProductsSuggestions from "@/components/Product/ProductsSuggestion";
import MainCategories from "@/components/Homepage/MainCategories";
import Head from "next/head";
import useItemQuantity from "@/helpers/Hooks/useItemQuantity";
import { useEffect } from "react"

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
  let product = products.find((product) => product.slug === productSlug) as Product
  

  return {
      props: { product}
  }
}

const Product = ({product}:{ product: Product }) => {

  const {itemQuantity, setItemQuantity} = useItemQuantity()
  product.qty = itemQuantity

  const {main, productWrapper, backButton} = styles

  const router = useRouter()
  const pathSlug = router.query.slug?.toString()

  const handleGoBack = () => {
    router.back()
  };

  useEffect(()=>{
    setItemQuantity(1)
  },[pathSlug])

  return (
    <Layout>
      <>
      <Head> 
      <title >Audiophile | {product.name}</title>
      <meta name="description" content={`Audiophile | ${product.description}`} />
      <meta property="og:title" content={`Audiophile | ${product.name}`} />
      <meta property="og:description" content={`Audiophile | ${product.description}`} />
    </Head>
      <main className={main}>
      <div className={productWrapper}>
      <button onClick={handleGoBack} className={backButton}>Go back</button>
      <ProductDetails product={product}/>
      <ProductFeatures product={product}/>
      <ProductGallery product={product}/>
      <ProductsSuggestions product={product}/>
      <MainCategories />
      <PreFooter/>
      </div>
      </main>
      </>
    </Layout>
  )
}

export default Product