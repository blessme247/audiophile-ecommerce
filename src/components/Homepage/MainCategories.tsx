import Headphones from "@/assets/images/headphones.webp";
import Earphones from "@/assets/images/earphones.webp";
import Speakers from "@/assets/images/speakers.webp";
import styles from "@/components/Homepage/homepage.module.scss"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Category {
  title: string;
  src: StaticImageData;
  url: string;
}

const MainCategories = () => {
    
  const mainCategoriesData: Category[] = [
    { title: "HEADPHONES", src: Headphones, url: "headphones" },
    { title: "SPEAKERS", src: Speakers, url: "speakers" },
    { title: "EARPHONES", src: Earphones, url: "earphones" },
  ];

  const {productCategories, productCategory, productImage1, productImage2, productImage3, redirectBtn, linkWrapper} = styles



  return (
    <div className={productCategories}>
      {mainCategoriesData.map((category, index) => {
        return (
          <div key={index} className={productCategory}>
            <Image src={category.src} alt="product image" className={index == 0 ? productImage1 : index == 1 ? productImage2 : productImage3}/>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="183" height="102" viewBox="0 0 183 102" fill="none" ><g filter="url(#filter0_f_0_4622)" ><ellipse cx="91.5" cy="51" rx="47.4444" ry="7" fill="black" ></ellipse></g><defs ><filter id="filter0_f_0_4622" x="0.563034" y="0.507492" width="181.874" height="100.985" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" ><feFlood flood-opacity="0" result="BackgroundImageFix" ></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" ></feBlend><feGaussianBlur stdDeviation="21.7463" result="effect1_foregroundBlur_0_4622" ></feGaussianBlur></filter></defs></svg>
            <p>{category.title}</p>
            <div className={linkWrapper}>
            <Link href={category.url} className={redirectBtn}>SHOP </Link>
            <svg  xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2"></path></svg>
            </div>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MainCategories;
