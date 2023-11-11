import { useContext } from "react"
import CartContext, { useCartContextType } from "../Context/CartProvider"


const useCart = (): useCartContextType => {
    return useContext(CartContext)
}

export default useCart