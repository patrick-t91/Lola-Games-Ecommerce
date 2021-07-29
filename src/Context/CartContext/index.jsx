import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const CartContext = createContext()


export const CartContextComponent = ({children}) => {
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState (0)
    const [countState, setCountState] = useState(true)

    const addItem = (item, quantity) => {
        const producto = cart.find (element => element.item.id === item.id);
        if (producto) {
            let cartAux = [...cart]; 
            cartAux.producto.quantity += quantity;
            setCart(cartAux);
        } else {
            const cartAux = [...cart, {
                item,
                quantity,
            }];
            setCart(cartAux);
        }
        if (countState) {
            setCountState(false)
        }
    }

    useEffect (() => {
            setCountState(true)
    }, [])

    const removeItem = (itemId) => {
        let itemDeleted = cart.find(element => element.item.id === itemId)
        cart.splice(cart.indexOf(itemDeleted), 1)
    }

    const clearCart = () => {
        setCart([])
    }

    useEffect ( () => {
        let price = 0;
            for (let item of cart) {
                    price = item.price++
                }
            return (
                setPrice(price)
            )    
    }, [cart])
    
    return (
    <CartContext.Provider value={{cart, price, countState, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
    )
}