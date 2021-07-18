import { ItemList } from '../../Components/ItemList/ItemList.jsx'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    let [productos, setProductos] = useState([])
    const  { categoryId } = useParams()

    useEffect( () => {
        const getData = async () => { 
            const response = await fetch("/products.json")
            const data = await response.json()
            setProductos (data)
        }    
        getData()
    }, [])

    return (
    <ItemList productos={ categoryId ? 
                        productos.filter(item => item.categoryId === categoryId)
                        : productos}/>
    )    
}