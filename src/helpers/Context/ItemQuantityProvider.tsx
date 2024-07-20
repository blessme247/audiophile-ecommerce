
import React, { Dispatch, ReactElement, SetStateAction, createContext, useMemo, useState } from 'react'

export interface ItemQuantityType {
    itemQuantity: number
    setItemQuantity: Dispatch<SetStateAction<number>>
}

export const ItemQuantityContext = createContext<ItemQuantityType>({
    itemQuantity: 1,
    setItemQuantity() {}
}) 

type ChildrenType = {children?: ReactElement | ReactElement[]}

export const ItemQuantityProvider = ({children}: ChildrenType): ReactElement =>{

    const [itemQuantity, setItemQuantity] = useState(1)

    const value = useMemo(() => ({
        itemQuantity,
        setItemQuantity,
      }), [itemQuantity, setItemQuantity]);
    return (
        <ItemQuantityContext.Provider value={value}>
            {children}
        </ItemQuantityContext.Provider>
    )
}