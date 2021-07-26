import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const ShopContext = createContext()

export const ShopContextComponent = ({children}) => {
    const [products, setProducts] = useState([]) 
    // const [cart, setCart] = useState([])

    useEffect( () => {
        const getProducts = async () => {
            const response = await fetch ("/products.json")
            const data = await response.json()
            setProducts(data)
        }
        getProducts()    
    }, [])
 
    return (
    <ShopContext.Provider value={{products}}>
        {children}
    </ShopContext.Provider>
    )
}