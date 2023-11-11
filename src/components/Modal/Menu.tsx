
import styles from "@/components/Navbar/navbar.module.scss";
import MainCategories from "../Homepage/MainCategories";
import { CSSProperties } from "react";

interface ModalStyleProp {
  style?: CSSProperties;
}

const MobileMenu = ({style}: ModalStyleProp) => {

  const {modalWrapper, menuModal, modalContainer } = styles;

  return (
    <div className={modalWrapper} style={style}>

    
    <div className={menuModal}>
        <div className={modalContainer}>

        <MainCategories style={{height:"180px", minWidth: "32.5%"}} />
        </div>
    </div>
    </div>
  )
}

export default MobileMenu