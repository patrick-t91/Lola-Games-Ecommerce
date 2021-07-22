import { ItemDetail } from '../../Components/ItemDetail'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const { id } = useParams()
    let [itemToShow, setItemToShow] = useState({})
    
    useEffect( () => {
        const getItem = async () => {
            const response = await fetch ("/products.json")
            const data = await response.json()
            setItemToShow (data.find(item => item.id === parseInt(id)))
        }
        getItem()
    }, [id]) 
    
    return (
        <>
             <ItemDetail item={itemToShow}/>
        </>
    )    
}