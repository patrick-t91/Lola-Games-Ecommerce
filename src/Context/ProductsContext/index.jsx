import { createContext, useEffect } from 'react';
import { getFirestore } from "../../Firebase/client.jsx";
export const ProductsContext = createContext();

export const ProductsContextComponent = () => {
     
    useEffect = () => {
        const dataBase = getFirestore() // Conexion a la base de datos
        const productsCollection = dataBase.collection("productos")
        const response = await productsCollection.get(); // Tomar la coleccion de productos
        if (response.size === 0) {
            alert('No hay productos disponibles!')
        } else {
            setProducts(response.docs.map(element => element.data()));
        }
    } 
    


    return (
        <ProductsContext.Provider value={{productos, filterProducts}} />
    )
}