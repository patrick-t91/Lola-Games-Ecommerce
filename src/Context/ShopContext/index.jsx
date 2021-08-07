import { createContext, useState, useEffect } from 'react'
import { getFirestore } from '../../Firebase/client.jsx' 

export const ShopContext = createContext()

export const ShopContextComponent = ({children}) => {
    const [products, setProducts] = useState([]) 
    const [loading, setLoading] = useState()

    
    useEffect( () => {
        setLoading(true)
        async function getData() {
            const dataBase = getFirestore(); // Conexion a la base de datos
            const response = await dataBase.collection("productos").get(); // Tomar la coleccion de productos
            setProducts(response.docs.map(element => element.data()));
            setLoading(false)
        }
        getData();
    }, [])
    
    return (
    <ShopContext.Provider value={{products, loading}}>
        {children}
    </ShopContext.Provider>
    )
}