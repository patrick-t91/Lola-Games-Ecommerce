import { Link } from 'react-router-dom';
import instagramlogo from '../../media/instagram-logo.png' 
import facebooklogo from '../../media/facebook-logo.png'
import whatsapplogo from '../../media/whatsapp-logo.png'
import './styles.css'

export const Footer = () => {
    return (
        <>
        <h3>Desarrollado por Patricio Toribio</h3>
        <ul className="d-flex">
            <li><img src={instagramlogo} alt="instagram" /></li>
            <li><img src={facebooklogo} alt="facebook" /></li>
            <li><img src={whatsapplogo} alt="whatsapp"/></li>
        </ul>
        <Link className="link" to={"/"}> Acerca de nosotros</Link>
        <Link className="link" to={"/"}>Contactanos</Link>
    </>
    )
    
}