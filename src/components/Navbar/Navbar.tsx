'use client'

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import cartIcon from "@/assets/images/cart.svg"
import styles from "@/components/Navbar/navbar.module.scss";
import { CSSProperties, useEffect, useState } from "react";
import Navlinks from "./Navlinks";
import MobileMenu from "../Modal/Menu";
import { useRouter } from "next/router";
import CartModal from "../Modal/CartModal";
import useCart from "@/helpers/Hooks/useCart";
import Link from "next/link";

interface NavbarProps {
  style?: CSSProperties;
}

const Navbar = ({ style }: NavbarProps) => {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)
  const router = useRouter()

  const {cart} = useCart()

  const {
    navbar,
    navWrapper,
    navLeft,
    hamburgerBtn,
    line,
    navRight,
    cartLength,
    mobileLogoWrapper
  } = styles;

  useEffect(()=>{
    setShowModal(false)
  },[router.query])


 

  return (
    <>
    <nav className={navbar} style={style}>
      <div className={navWrapper}>
        <div className={navLeft}>
          <button className={hamburgerBtn} onClick={()=>setShowModal(!showModal)}>
            <span className={line}></span>
            <span className={line}></span>
            <span className={line}></span>
          </button>
          <div className={mobileLogoWrapper}>
        <Link href="/">
          <Image src={logo} alt="logo" />
          </Link>
        </div>
        </div>
        
        <Navlinks/>
        <div className={navRight}>
        <Image src={cartIcon} alt="logo" role="button" tabIndex={0} onKeyDown={(e)=> {
              if(e.key == "Enter" || e.key == " "){
                setShowCart(!showCart)
              }
            }}
            onClick={()=>setShowCart(!showCart)}  />
          
          {cart.length > 0 && <p className={cartLength}></p>}
        </div>

      </div>
    </nav>
    <MobileMenu style={{top: showModal ? "6rem" : "-100%"}}/>
    <CartModal style={{top: showCart ? "6rem" : "-100%"}} />
    </>
  );
};

export default Navbar;
