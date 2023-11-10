
import styles from "@/components/Navbar/navbar.module.scss";
import MainCategories from "../Homepage/MainCategories";

const MobileMenu = () => {

  const {modalWrapper, menuModal, modalContainer } = styles;

  return (
    <div className={modalWrapper}>

    
    <div className={menuModal}>
        <div className={modalContainer}>

        <MainCategories style={{height:"180px"}} />
        </div>
    </div>
    </div>
  )
}

export default MobileMenu