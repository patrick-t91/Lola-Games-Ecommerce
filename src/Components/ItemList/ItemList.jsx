import { Item } from '../Item/Item.jsx'


export const ItemList = ({productos}) => {
    return (
        productos.map (elemento => {
            return (
                <span key={elemento.id}>
                    <Item item={elemento}/>
                </span>
            )
        }) 
    )
}
