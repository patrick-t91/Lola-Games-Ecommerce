import { Item } from '../Item'
 
export const ItemList = ({productos}) => {
    return (
        productos.map (item => {
            return (
                <div key={item.id} className="container">
                    <div className="row">  
                        <div  className="layout col-4">
                            <Item producto={item}/>
                        </div>         
                    </div>
                </div>
            )
        }) 
    )
}
