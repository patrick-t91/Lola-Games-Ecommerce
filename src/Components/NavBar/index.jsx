import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from '../CartWidget/CartWidget.jsx'


export const NavBar = () => {
    return ( 
    <>
         <nav className="navmenu"> 
            <ul className="navlist text-center">
                <li><a href="#products">Productos</a></li>
                <li><a href="#aboutus">Acerca de Nosotros</a></li>
                <li><a href="#contactus">Contactanos</a></li>
            </ul>
            <input type="search" id="navinput" size="4" value="¿Qué producto buscás?"/>
        </nav>
        <div className="text-end mt-3 mb-2 mr-2">
            <CartWidget />
        </div>
    </>     
          )
}