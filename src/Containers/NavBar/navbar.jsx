import 'styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    return ( 
    <>
         <nav> 
            <img src="logo.png" alt="logo-ecommerce"/>
            <ul>
                <li><a href="#aboutus">Acerca de Nosotros</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#contactus">Contactanos</a></li>
            </ul>
        </nav>
        <div id="aboutus">Hola</div>
        <div id="products">Hola</div>
        <div id="contactus">Hola</div>
    </>     
          )
}