import { Item } from '../Item'
import './estilos.css'

export const ItemList = ({productos}) => {
    return (
        productos.map (elemento => {
            return (
                <div key={elemento.id} className="layout">
                    <Item item={elemento}/>
                </div>
            )
        }) 
    )
}
