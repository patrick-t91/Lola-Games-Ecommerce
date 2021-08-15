import { Item } from '../Item'
import './styles.scss'

export const ItemList = ({productos}) => {
    return (
            <div className="contenedor">
                {productos.map (item => {
                    return (
                        <Item 
                        key={item.id} 
                        producto={item} 
                        />
                    )
                })} 
            </div>         
    )
}
