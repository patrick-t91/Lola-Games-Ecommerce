import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import './styles.css' 
 
export const Cart = () => {
    const { cart, addItem, removeItem, clearCart, price, cartLength, setCountState} = useContext(CartContext)
    
    return (
        <div className="carrito m-2">
            <h2 className="text-center fs-2">Detalle de tu compra</h2>
            <span className="carrito b-2 text-center d-flex border border-top-1 border-bottom-1 border-light">
                {cart.map(element => {
                    return (
                            <>
                                <span className="orden fs-3">{(cart.indexOf(element))+1}</span>
                                <span key={element.item.id}>
                                    <div>Producto: {element.item.Producto}</div>
                                    <img src={element.item.img} alt="imagen-producto" style={{width: '15%'}} className="img-productos img-fluid"/>
                                    <div>Cantidad: {element.quantity}</div>
                                    <button onClick={() => {addItem(element.item, 1)}}>Agregar más unidades de este producto</button>
                                    <button onClick={() => {removeItem(element.item)}}>Eliminar producto</button>
                                    <div><Link to={`producto/${element.item.id}`} className="link">Ver producto</Link></div>
                                </span>
                            </>
                        )}
                    )
                }
            </span>
            <div>Total de productos en el carrito: {cartLength}</div>
            <div>Precio total de tu compra: $ {price}</div>
            <button onClick={() => {clearCart()}}>Vaciar carrito</button>
            <div><Link to="/" onClick={() => {setCountState(true)}} className="link">Volver al inicio</Link></div>
        </div>
    )
}