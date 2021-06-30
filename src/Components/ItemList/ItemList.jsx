// import { Item } from '../Item/Item.jsx'


export const ItemList = ({productos}) => {
    console.log (productos)
    productos.map(element => {
        return (
            <div>
                <h2>{element.producto}</h2>
            </div>
        )
        
    })
}