import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount'
import { CartContext } from '../../Context/CartContext'
import './styles.css'

 export const ItemDetail = ({item}) => {
    const {addItem, countState, setCountState} = useContext(CartContext)
    
    return (
        !!item &&
        <div className="itemClass container border border-dark border-2">
            <div className="row">
                <div className="col">
                    <img src={item.img} alt="imagen-producto" className="img-productos img-fluid"/>
                </div>
                <div className="col itemDescription p-2">
                    <h2>{item.Producto}</h2>
                    <p className="fs-4">Precio: $ {item.Precio}</p>
                    <p className="fs-4">Stock: {item.Stock} unidades</p>
                    <div className="border border-dark border-1 mb-2 bg-light">
                        <h3>Características del producto</h3>
                        <p>{item.Description}</p>
                    </div>
                    <div>
                        {countState ? 
                        <ItemCount stock={item.Stock} initial={1} addItem= {addItem} item={item}/> 
                        : 
                        <>
                            <Link className="link" to={'/cart'} onClick={() => {setCountState(true)}}>Finalizar compra</Link>
                            <Link className="link" to={`/category/${item.Categoria}`} onClick={() => {setCountState(true)}}>Ver productos similares</Link>
                        </>
                            }
                    </div> 
                </div>
            </div>
        </div>
    )
}
            
      

