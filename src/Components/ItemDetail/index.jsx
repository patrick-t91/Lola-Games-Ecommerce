import { ItemCount } from '../ItemCount'
import './styles.css'

 export const ItemDetail = ({item}) => {
    const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} productos al carrito`)
    }
    
    console.log(item)
    
    return (
        <>
            <div className="itemClass container border border-dark border-2">
                <div className="row">
                    <div className="col">
                        <img src={item.img} alt="imagen-producto" className="img-productos img-fluid"/>
                    </div>
                    <div className="col itemDescription p-2">
                        <h2>{item.producto}</h2>
                        <p className="fs-4">Precio: $ {item.precio}</p>
                        <p className="fs-4">Stock: {item.stock} unidades</p>
                        <div className="border border-dark border-1 mb-2">
                            <h3>Características del producto</h3>
                            <p>{item.descripcion}</p>
                        </div>
                        <div>
                            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                        </div> 
                    </div>
                </div>
            </div>
        </>
        )
}