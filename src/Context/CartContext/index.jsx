import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartContextComponent = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState ()

    const addItem = (item, quantity) => {
        setCart([...cart, item*quantity])
    }
    useEffect( () => {
       setQuantity(cart.length)
    }, [cart])
    
    return (
    <CartContext.Provider value={{cart, quantity, addItem}}>
        {children}
    </CartContext.Provider>
    )
}