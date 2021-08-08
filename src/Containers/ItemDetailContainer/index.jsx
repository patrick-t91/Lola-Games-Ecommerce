import { ItemDetail } from '../../Components/ItemDetail'
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../Firebase/client.jsx' 

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [productToShow, setProductToShow] = useState({})

    useEffect( () => {
        const dataBase = getFirestore() // Conexion a la base de datos
        const productsCollection = dataBase.collection("productos")
        async function getProduct() {
                const response = await productsCollection.where('id', '==', id).get()
                const product = response.docs.map(element => element.data())
                setProductToShow(product[0])
                
            }
        getProduct();
    }, [id, productToShow])
    
    return (
        <>
            <ItemDetail item= {productToShow}/>
        </>
    )    
}
