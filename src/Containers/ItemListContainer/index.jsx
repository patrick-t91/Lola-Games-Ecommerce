import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ItemList } from '../../Components/ItemList/ItemList.jsx'
import { ShopContext } from '../../Context'

export const ItemListContainer = () => {
    const productos = useContext (ShopContext)
    const  { categoryId } = useParams()
    console.log(productos)
    return (
        <div>hola</div>
    // <ItemList productos={ categoryId ? 
    //                     productos.filter(item => item.categoryId === categoryId)
    //                     : productos}/>
    )    
}