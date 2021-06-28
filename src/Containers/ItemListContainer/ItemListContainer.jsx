import { ItemCount } from '../../Components/ItemCount'
import { ItemList } from '../../Components/ItemList/ItemList.jsx'
import { useState, useEffect } from 'react';


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect( () => {
        async function getData () {
            const response = await fetch ("./products.json") 
            const data = await response.json();
            setProductos(data)
        }
        setProductos(getData());
        return () => {
        }
    }, [])
    
    return (
        <div>
            <ItemList productos={ }/>
        </div>
    )     


            const onAdd = (cantidad) => {
                alert(`Has agregado ${cantidad} productos al carrito`)
            }
    return (
        <>
            <h1 className="mt-2 bg-danger">Aquí irá la sección de productos, con una lista de items que consistirá justamente en los distintos 
                productos, con su imagen e información (nombre, marca, precio, etc.)
            </h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <ItemList />
        </>
    )
}