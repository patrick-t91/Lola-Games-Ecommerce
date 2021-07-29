import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'

export const Cart = () => {
    const { cart, removeItem, clearCart} = useContext(CartContext)

    return (
        <>
            {cart.map(element => {
                return (
                    <>
                    <div>Producto: {element.item.producto}</div>
                    <div>Cantidad: {element.quantity}</div>
                    <button onClick={() => {removeItem(element.item.id)}}>Eliminar producto</button>
                </>)}
                )
            }
            <span>Total de productos en el carrito: {cart.length}</span>
            <button onClick={() => {clearCart()}}>Vaciar carrito</button>
        </>
    )
}