import { NavBar } from "../NavBar";
import "./styles.scss";

export const Header = () => {
  return (
    <header className="appHeader p-1">
      <NavBar />
      <span>
        <h1 className="title text-center">Lola Games </h1>  
      </span>
    </header>
  );
};
