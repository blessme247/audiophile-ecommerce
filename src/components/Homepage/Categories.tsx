import React from 'react'
import MainCategories from './MainCategories'
import styles from "@/components/Homepage/homepage.module.scss"
import SubCategory1 from './SubCategory1'
import SubCategory2 from './SubCategory2'
import SubCategory3 from './SubCategory3'
import PreFooter from '../PreFooter/PreFooter'

const Categories = () => {

    const {categoriesSection} = styles

  return (
    <section className={categoriesSection}>
        <MainCategories/>
        <SubCategory1/>
        <SubCategory2 />
        <SubCategory3 />
        <PreFooter />
    </section>
  )
}

export default Categories