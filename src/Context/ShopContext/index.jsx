import { createContext, useState, useEffect } from 'react'
import { getFirestore } from '../../Firebase/client.jsx' 

export const ShopContext = createContext()

export const ShopContextComponent = ({children}) => {
    const [products, setProducts] = useState([]) 

    useEffect( () => {
        async function getData() {
            const dataBase = getFirestore(); // Conexion a la base de datos
            const products = await dataBase.collection("productos").get(); // Tomar la coleccion de productos
            setProducts(products.docs.map(element => element.data()));
        }
        getData();
    }, [])
 
    return (
    <ShopContext.Provider value={{products}}>
        {children}
    </ShopContext.Provider>
    )
}