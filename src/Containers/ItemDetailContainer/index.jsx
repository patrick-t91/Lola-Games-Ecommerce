import { ItemDetail } from '../../Components/ItemDetail'
import { useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext'

export const ItemDetailContainer = () => {
    const {products} = useContext(ShopContext)
    const { id } = useParams()
    const [productToShow, setProductToShow] = useState({})

    useEffect ( ()  => {
        const getProductToShow = () => {
            setProductToShow (products.find (product => product.id === id)) 
        }
        getProductToShow ()
    }, [id, products])
    
    return (
            <ItemDetail item= {productToShow}/>
    )    
}
