import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartContextComponent = ({children}) => {
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState (0)
    const [cartLength, setCartLength] = useState(0)
    const [countState, setCountState] = useState(true)

    // Agregar y eliminar elementos del carrito y vaciar carrito
    const addItem = (item, quantity) => {
        const producto = cart.find (element => element.item.id === item.id);
        if (producto) {
            producto.quantity+= quantity;
            setCart([...cart])
        } else {
            const cartAux = [...cart, {
                item,
                quantity,
            }];
            setCart(cartAux);
        }
        setCountState(false)
    }

    useEffect (() => {
        setCountState(true)
    }, [])

    const removeItem = (item) => {
        let itemsToStay = cart.filter(element => element.item !== item);
        setCart(itemsToStay);
        if (cart.length <= 1) {localStorage.clear()}
    }

    const clearCart = () => {
        setCart([])
        localStorage.clear()
    }

    // Actualizar precio y cantidad de items del carrito
    useEffect ( () => {
        let price = 0
        for (let producto of cart) {
                price += producto.item.precio*producto.quantity
            }
        return (
            setPrice(price)
        )    
    }, [cart])
    
    useEffect ( () => {
        let cartLength = 0;
        for (let producto of cart) {
            cartLength += producto.quantity
        }
        return (
            setCartLength(cartLength)
        )
    }, [cart])

    // Almacenamiento del carrito en Local Storage    
    useEffect ( () => {
        if (cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart)) 
    }, [cart])
   
    useEffect ( () => {
        let savedCart = JSON.parse(localStorage.getItem("cart"));
        console.log(savedCart)
        if (savedCart) setCart(savedCart)
    }, [])

    return (
    <CartContext.Provider value={{cart, price, cartLength, countState, setCountState, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
    )
}