import { ItemDetail } from '../../Components/ItemDetail'
import { useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext'
import { CartContext } from '../../Context/CartContext'

export const ItemDetailContainer = () => {
    const {products} = useContext(ShopContext)
    const {countState, setCountState} = useContext(CartContext)
    const { id } = useParams()
    const [productToShow, setProductToShow] = useState({})

    console.log(id)
    console.log(products)

    useEffect ( ()  => {
        const getProductToShow = () => {
            setProductToShow (products.find (product => product.id === parseInt(id))) 
        }
        getProductToShow ()
    }, [id, products])

    return (
        <ItemDetail item= {productToShow}/>
    )    
}