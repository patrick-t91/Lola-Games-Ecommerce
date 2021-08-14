import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/index.jsx'
import { SearchInput } from '../SearchInput';
import './styles.scss'
import logo from '../../media/logo-lola-games.png'

export const NavBar = () => {

    return ( 
        <nav className="navmenu navmenu-mobvile">
            <ul className="navlist">
                <li><Link to={"/"}><img src={logo} className="App-logo" alt="logo" /></Link></li>
                <li><Link to={'/category/Juegos'} className="link">Juegos</ Link></li>
                <li><Link to={'/category/Consolas'} className="link">Consolas y equipos</ Link></li>                   
                <li><Link to={'/category/Accesorios'} className="link">Accesorios</ Link></li>    
            </ul>
            <div>
                <SearchInput />
            </div>
            <CartWidget />
        </nav>     
    )
}