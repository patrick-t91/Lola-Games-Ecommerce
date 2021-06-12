import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    return ( 
    <>
         <nav className="navmenu"> 
            <ul className="navlist">
                <li><a href="#products">Productos</a></li>
                <li><a href="#aboutus">Acerca de Nosotros</a></li>
                <li><a href="#contactus">Contactanos</a></li>
            </ul>
            <input type="search" id="navinput" size="4" value="¿Qué producto buscás?"/>
        </nav>
    </>     
          )
}