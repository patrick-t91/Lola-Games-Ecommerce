import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount'
import './styles.css'

 export const ItemDetail = ({item}) => {
    const [ countState, setCountState ] = useState(true)
    const onAdd = (cantidad) => {
        if (countState === true) {
            setCountState(false)
        }
        alert(`Has agregado ${cantidad} productos al carrito!`)
    }

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
                            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> 
                            : <Link to={'/cart'}><button>Comprar</button></Link>}
                        </div> 
                    </div>
                </div>
            </div>
    )
}
            
      

