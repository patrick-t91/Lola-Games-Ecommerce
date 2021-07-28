import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const CartContext = createContext()


export const CartContextComponent = ({children}) => {
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState (0)
    const [countState, setCountState ] = useState(true)

    const addItem = (item, quantity) => {
        if (countState) {
            setCountState(false)
        }
        alert(`Has agregado ${quantity} productos al carrito!`);
        cart.find ((element) => element.item.id) ? 
            setCart([...cart, {...item, quantity}])
            : setCart([...cart, {item, quantity}])  
    }

    const removeItem = (itemId) => {
        let itemDeleted = cart.find((element) => element.item.id === itemId)
        cart.splice(cart.indexOf(itemDeleted), 1)
    }

    const clearCart = () => {
        setCart([])
    }

    useEffect( () => {
        const calculatePrice = () => {
            let price = 0
            for (let item of cart) {
                    price = item.quantity++
                }
            return (
                setPrice(price)
            )    
        }    
       calculatePrice()
    }, [cart])
    
    return (
    <CartContext.Provider value={{cart, price, countState, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
    )
}