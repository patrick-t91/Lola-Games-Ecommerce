import { ItemList } from '../../Components/ItemList/ItemList.jsx'
import { useState, useEffect } from 'react';


export const ItemListContainer = () => {
    let [productos, setProductos] = useState([])

    useEffect( () => {
        const getData = async () => {
            const response = await fetch("/products.json")
            const data = await response.json()
            setProductos (data)
        }   
        getData()
    }, [])
    
    return (
        <ItemList productos={productos}/>
    )    
}