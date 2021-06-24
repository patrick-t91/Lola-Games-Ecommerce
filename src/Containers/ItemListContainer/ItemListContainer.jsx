import { ItemCount } from '../../Components/ItemCount'
import { ItemList } from '../../Components/ItemList/ItemList.jsx'

export const ItemListContainer = () => {
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