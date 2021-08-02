import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const { cart, removeItem, clearCart, price, cartLength} = useContext(CartContext)

    return (
        <>
            {cart.map(element => {
                return (
                    <div key={element.item.id}>
                        <div>Producto: {element.item.producto}</div>
                        <div>Cantidad: {element.quantity}</div>
                        <div><Link to={`item/${element.item.id}`}>Ver producto</Link></div>
                        <button onClick={() => {removeItem(element.item)}}>Eliminar producto</button>
                    </div>)}
                )
            }
            <div>Total de productos en el carrito: {cartLength}</div>
            <div>Precio total de tu compra: $ {price}</div>
            <button onClick={() => {clearCart()}}>Vaciar carrito</button>
            <div><Link to="/">Volver al inicio</Link></div>
        </>
    )
}