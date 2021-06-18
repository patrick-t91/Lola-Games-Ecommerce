import './styles.css'
import cart from '../../media/cart.png'

export const CartWidget = (props) => {
    return (
    <>
        <img src={cart} alt="carrito" />          
        <span>{props.counter}</span>
    </>
    )
}