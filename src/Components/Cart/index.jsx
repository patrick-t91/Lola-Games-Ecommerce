import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import './styles.css' 
 
export const Cart = () => {
    const { cart, addItem, removeItem, clearCart, price, cartLength, setCountState} = useContext(CartContext)
    const [btnAddColor, setBtnAddColor] = useState ('#000000')
    const [btnAddBckColor, setBtnAddBckColor] = useState ('#ffffff')
    const [btnDltColor, setBtnDltColor] = useState ('#000000')
    const [btnDltBckColor, setBtnDltBckColor] = useState ('#ffffff')
    const [btnClearColor, setBtnClearColor] = useState ('#000000')
    const [btnClearBckColor, setBtnClearBckColor] = useState ('#ffffff')

    return (
        <div className="carrito m-2">
            <h2 className="text-center fs-2">Detalle de tu compra</h2>
            <span className="carrito ">
                {cart.map(element => {
                    return (
                            <div className="d-flex b-2 text-center border border-top-1 border-bottom-1 border-light">
                                <span className="orden fs-3">{(cart.indexOf(element))+1}</span>
                                <span key={element.item.id}>
                                    <div>Producto: {element.item.Producto}</div>
                                    <img src={element.item.img} alt="imagen-producto" style={{width: '15%'}} className="img-productos img-fluid"/>
                                    <div>Cantidad en el carrito: {element.quantity}</div>
                                    <button style={{color: btnAddColor, backgroundColor: btnAddBckColor}} onClick={() => {addItem(element.item, 1)}} onMouseOver={() => 
                                    {setBtnAddColor('#ffffff'); setBtnAddBckColor('#000000')}} onMouseLeave={() => {setBtnAddColor('#000000'); setBtnAddBckColor('#ffffff')}}
                                    className="m-1">Agregar más unidades de este producto</button>
                                    <button style={{color: btnDltColor, backgroundColor: btnDltBckColor}} onClick={() => {removeItem(element.item)}} onMouseOver={() => 
                                    {setBtnDltColor('#ffffff'); setBtnDltBckColor('#000000')}} onMouseLeave={() => {setBtnDltColor('#000000'); setBtnDltBckColor('#ffffff')}}>
                                        Eliminar producto</button>
                                    <div><Link to={`producto/${element.item.id}`} className="link">Ver producto</Link></div>
                                </span>
                            </div>
                        )}
                    )
                }
            </span>
            <div>Total de productos en el carrito: {cartLength}</div>
            <div>Precio total de tu compra: $ {price}</div>
            <button style={{color: btnClearColor, backgroundColor: btnClearBckColor}} onClick={() => {clearCart()}} onMouseOver={() => {setBtnClearColor('#ffffff'); setBtnClearBckColor('#000000')}} 
            onMouseLeave={() => {setBtnClearColor('#000000'); setBtnClearBckColor('#ffffff')}}>Vaciar carrito</button>
            <div><Link to="/" onClick={() => {setCountState(true)}} className="link">Volver al inicio</Link></div>
        </div>
    )
}