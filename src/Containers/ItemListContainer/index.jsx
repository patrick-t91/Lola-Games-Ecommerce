import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ItemList } from '../../Components/ItemList/index.jsx'
import { ShopContext } from '../../Context/ShopContext'
import ClipLoader from 'react-spinners/ClipLoader'

export const ItemListContainer = () => {
    const {products, loading}= useContext (ShopContext)
    const  { category } = useParams()

    return (
        <>
        {   loading ?
            <div className="text-center">
                <ClipLoader loading={loading} color={'red'} size={160} font-weight={'bolder'}/>
                <div className="fw-bolder">Cargando productos...</div>
            </div>
            :
            <ItemList productos={ category ? 
            products.filter(item => item.Categoria === category)
            : products}/>
        }
        </>
    )    
}