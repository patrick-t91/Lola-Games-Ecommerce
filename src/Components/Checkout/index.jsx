import { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext'

export const Checkout = () => {
    // const name = ''
    // const email = ''
    // const phone = 0

    // const result = {buyer: {name: 'pato', email: 'patotori@gmail.com', phone: 22446688}, cart: cart, total: totalCart()}
    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const [name, setName ] = useState ('');
    const [email, setEmail ] = useState ('');
    const [phone, setPhone ] = useState ()
    
    return (
        <>
            <div>
                <input 
                type="text" 
                value={name} 
                onInput={(e) => { setName(e.target.value)}} 
                placeholder='name'
                />
                <input 
                type="email" 
                value={email} 
                onInput={(e) => { setEmail(e.target.value)}} 
                placeholder='email'
                />
                <input 
                type="tel" 
                value={phone} 
                onInput={(e) => { setPhone(e.target.value)}} 
                placeholder='phone'
                />
            </div>
            <button 
            onClick={() => { clearCart()}}
            >
                Cancelar
            </button>
            <button 
            onClick={() => { 
                const venta = { buyer: {name, email, phone}, item: cart, price: totalPrice}
                console.log(venta)}}
            >
                Comprar
            </button>
        </>
    )   
}