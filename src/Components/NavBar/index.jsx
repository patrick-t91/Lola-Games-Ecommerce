import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import './styles.css'
import logo from '../../media/logo-lola-games.png'

export const NavBar = () => {
    return ( 
    <>
        <nav className="navmenu"> 
            <ul className="navlist">
                <li><Link to={"/"}><img src={logo} className="App-logo" alt="logo" /></Link></li>
                <li> <Link to={'/category/1'}>Juegos</ Link></li>
                <li> <Link to={'/category/2'}>Accesorios</ Link></li>                   
                <li><Link to={'/category/3'}>Equipos</ Link></li>    
                <div className="text-end">
                    <ul>
                        <li><Link to={'/categories'}> Acerca de nosotros</Link></li>
                        <li><Link >Contactanos</Link></li>
                    </ul>
                </div>   
            </ul>
            <CartWidget />
        </nav>
    </>     
          )
}