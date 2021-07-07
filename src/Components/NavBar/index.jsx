import { CartWidget } from '../CartWidget/CartWidget.jsx'
import './styles.css'
import logo from '../../media/logo-lola-games.png'

export const NavBar = () => {
    return ( 
    <>
        <nav className="navmenu"> 
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="navlist">
                <li><a href="#products">Productos</a></li>
                <li><a href="#aboutus">Acerca de Nosotros</a></li>
                <li><a href="#contactus">Contactanos</a></li>
            </ul>
            <CartWidget />
        </nav>
    </>     
          )
}