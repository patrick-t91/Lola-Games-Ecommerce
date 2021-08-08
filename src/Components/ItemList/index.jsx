import { Item } from '../Item'
 
export const ItemList = ({productos}) => {
    return (
        <div  className="container">

                <div className="layout col-4">
                    {productos.map (item => {
                        return (
                            <Item 
                            key={item.id} 
                            producto={item} 
                            />
                        )
                    })} 
                </div>         
        </div>
    )
}
