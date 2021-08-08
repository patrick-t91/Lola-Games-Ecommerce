import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ItemList } from '../../Components/ItemList/index.jsx'
import ClipLoader from 'react-spinners/ClipLoader'
import { getFirestore } from '../../Firebase/client.jsx' 

export const ItemListContainer = () => {
    const  { category } = useParams()
    const [loading, setLoading] = useState()
    const [products, setProducts] = useState([])

    useEffect( () => {
        setLoading(true)
        const dataBase = getFirestore() // Conexion a la base de datos
        const productsCollection = dataBase.collection("productos")
        async function getData() {
            if (category) {
                const response = await productsCollection.where('Categoria', '==', category).get()
                if (response.size === 0) {
                    alert('No hay productos disponibles!')
                } else {
                    setProducts(response.docs.map(element => element.data()))
                    setLoading(false)
                }
            } else {
                const response = await productsCollection.get(); // Tomar la coleccion de productos
                if (response.size === 0) {
                    alert('No hay productos disponibles!')
                } else {
                    setProducts(response.docs.map(element => element.data()));
                    setLoading(false)
                }
            }
        }
        getData();
    }, [category])
    
    return (
        <>
        {   loading ?
            <div className="text-center">
                <ClipLoader loading={loading} color={'red'} size={160} font-weight={'bolder'}/>
                <div className="fw-bolder">Cargando productos...</div>
            </div>
            :
            <ItemList productos={products}/>
        }
        </>
    )    
}