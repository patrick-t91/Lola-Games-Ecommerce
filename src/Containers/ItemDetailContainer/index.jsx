import { ItemDetail } from '../../Components/ItemDetail'
import { useState, useEffect } from 'react';


export const ItemDetailContainer = () => {
    let [item, setItem] = useState({})

    useEffect( () => {
        const getItems = async () => {
            const response = await fetch ("/products.json")
            const data = await response.json()
            setItem(data[0])
        }   
        getItems()
    }, [])

    console.log(item)

    return (
        <>
            <ItemDetail item={item}/>
        </>
    )    
}