import './styles.css'
import cartLogo from '../../media/cart.png'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const { cartLength } = useContext(CartContext)

    return (
        <>
        {cartLength > 0 ? 
            <div >
            <Link to={'/cart'}><img src={cartLogo} alt="carrito"/></Link>    
                <h3 className="bg-light text-center">{cartLength}</h3>
            </div> 
            : null
            }
        </>

               
    )
}