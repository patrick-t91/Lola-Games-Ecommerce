import { Link } from "react-router-dom";
import instagramlogo from "../../media/instagram-logo.png";
import facebooklogo from "../../media/facebook-logo.png";
import whatsapplogo from "../../media/whatsapp-logo.png";
import "./styles.scss";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <h5>Desarrollado por Patricio Toribio - Todos los derechos reservados © 2021</h5>
      <div className="footerLinks">
        <h5>Contactanos a través de las redes</h5>
        <div className="mediaLinks">
          <Link className="footerLink" to={"/instagram"}>
            <img src={instagramlogo} alt="instagram" />
          </Link>
          <Link className="footerLink" to={"/facebook"}>
            <img src={facebooklogo} alt="facebook" />
          </Link>
          <Link className="footerLink" to={"/whatsapp"}>
            <img src={whatsapplogo} alt="whatsapp" />
          </Link>
        </div>
      </div>
    </div>
  );
};
