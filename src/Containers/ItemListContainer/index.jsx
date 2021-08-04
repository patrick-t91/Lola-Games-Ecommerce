import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ItemList } from '../../Components/ItemList/ItemList.jsx'
import { ShopContext } from '../../Context/ShopContext'



export const ItemListContainer = () => {
    const {products}= useContext (ShopContext)
    const  { categoryId } = useParams()

    return (
    <ItemList productos={ categoryId ? 
                        products.filter(item => item.categoryId === categoryId)
                        : products}/>
    )    
}