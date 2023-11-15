// "use client"

import { useContext } from "react"
import { ItemQuantityContext, ItemQuantityType } from "../Context/ItemQuantityProvider"


const useItemQuantity = (): ItemQuantityType => {
    return useContext(ItemQuantityContext)
}

export default useItemQuantity