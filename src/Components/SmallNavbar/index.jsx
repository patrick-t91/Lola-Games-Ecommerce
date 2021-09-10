import { Link } from "react-router-dom";
import { SearchInput } from "../SearchInput";
import { CartWidget } from "../CartWidget/index.jsx";
import logo from "../../media/logo-lola-games.png";
import "./styles.scss";

export const SmallNavbar = () => {
  return (
    <nav>
      <div className="smallNav">
        <Link to={"/Lola-Games-Ecommerce"}>
          <img src={logo} alt="logo" className="appLogo" />
        </Link>
        <div className="navInput">
          <SearchInput />
        </div>
        <CartWidget />
      </div>
      <ul className="navlist">
        <li>
          <Link to={"/category/Juegos"} className="navLink">
            Juegos
          </Link>
        </li>
        <li>
          <Link to={"/category/Consolas"} className="navLink">
            Consolas
          </Link>
        </li>
        <li>
          <Link to={"/category/Accesorios"} className="navLink">
            Accesorios
          </Link>
        </li>
      </ul>
    </nav>
  );
};
