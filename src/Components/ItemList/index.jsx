import { Item } from '../Item'
import './estilos.css'

export const ItemList = ({productos}) => {
    return (
        productos.map (elemento => {
            return (
        <div className="container">
            <div className="row">  
                <div key={elemento.id} className={"layout col-6 " + ((productos.indexOf(elemento))%2 === 0 ? "align-item-start" : "align-item-end")}>
                    <Item item={elemento}/>
                </div>         
            </div>
        </div>
            )
        }) 
    )
}
