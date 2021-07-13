import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import './styles.css'
import logo from '../../media/logo-lola-games.png'

export const NavBar = () => {
    return ( 
    <>
        <nav className="navmenu"> 
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="navlist">
                <li><Link to={'/'}>Productos </ Link></li>
                <li><Link to={'/categories'}> Acerca de nosotros</Link></li>
                <li><Link >Contactanos</Link></li>
            </ul>
            <CartWidget />
        </nav>
    </>     
          )
}