import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchInput } from "../SearchInput";
import { CartWidget } from "../CartWidget";
import { SmallNavbar } from "../SmallNavbar";
import logo from "../../media/logo-lola-games.png";
import "./styles.scss";

export const NavBar = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setScreenWidth(window.innerWidth)
      );
  }, []);

  return screenWidth > 600 ? (
    <nav className="navmenu">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="appLogo" />
      </Link>
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
      <div className="navInput">
        <SearchInput />
      </div>
      <CartWidget />
    </nav>
  ) : (
    <SmallNavbar />
  );
};
