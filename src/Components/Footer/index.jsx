import instagramlogo from '../../media/instagram-logo.png' 
import facebooklogo from '../../media/facebook-logo.png'
import whatsapplogo from '../../media/whatsapp-logo.png'

export const Footer = () => {
    return (
        <>
        <h3>Desarrollado por Patricio Toribio</h3>
        <ul>
            <li><img src={instagramlogo} alt="instagram" /></li>
            <li><img src={facebooklogo} alt="facebook" /></li>
            <li><img src={whatsapplogo} alt="whatsapp"/></li>
        </ul>
    </>
    )
    
}