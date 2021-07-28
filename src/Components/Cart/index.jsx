import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'

export const Cart = () => {
    const { cart, quantity, removeItem} = useContext(CartContext)

    return (
        <>
            <div>
                <span>Producto</span>
                <span>Cantidad </span>
            </div> 
            {cart.map(item => {
                return (
                    <>
                    <span>{item.producto}</span>
                    <span>{quantity}</span>
                    <button onClick={() => {removeItem(item.id)}}>Eliminar producto</button>
                </>)}
                )
            }
            <span>Total de productos en el carrito: {cart.length}</span>
            <span>Vaciar carrito</span>
        </>
    )
}