import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount'
import { CartContext } from '../../Context/CartContext'
import './styles.css'

 export const ItemDetail = ({item}) => {
    const {addItem, countState} = useContext(CartContext)
    
    return (
        !!item &&
        <div className="itemClass container border border-dark border-2">
            <div className="row">
                <div className="col">
                    <img src={item.img} alt="imagen-producto" className="img-productos img-fluid"/>
                </div>
                <div className="col itemDescription p-2">
                    <h2>{item.producto}</h2>
                    <p className="fs-4">Precio: $ {item.precio}</p>
                    <p className="fs-4">Stock: {item.stock} unidades</p>
                    <div className="border border-dark border-1 mb-2 bg-light">
                        <h3>Características del producto</h3>
                        <p>{item.descripcion}</p>
                    </div>
                    <div>
                        {countState ? 
                        <ItemCount stock={item.stock} initial={1} addItem= {addItem} item={item}/> 
                        : 
                        <>
                            <Link to={'/cart'}>Finalizar compra</Link>
                            <Link to={`/category/${item.categoryId}`}>Ver productos similares</Link>
                        </>
                            }
                    </div> 
                </div>
            </div>
        </div>
    )
}
            
      

