import './styles.css'
import cartLogo from '../../media/cart.png'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'

export const CartWidget = () => {
    const { cartLength } = useContext(CartContext)

    return (
        <>
        {cartLength > 0 ? 
            <div >
                <img src={cartLogo} alt="carrito"/>
                <h3 className="bg-light text-center">{cartLength}</h3>
            </div> 
            : null
            }
        </>

               
    )
}