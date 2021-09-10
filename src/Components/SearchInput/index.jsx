import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import searchIcon from "../../media/search.jpg";
import "./styles.scss";

export const SearchInput = () => {
  const { productos, value, setValue, filterProducts, productosFiltrados } =
    useContext(ProductsContext);

  return (
    <div className="navSearch">
      <input
        type="text"
        placeholder="Buscar producto"
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
          filterProducts(productos, value)
          console.log(e.target.value);
          console.log(value.length);
          console.log(productosFiltrados);
        }}
        className="m-0"
      />
      <img src={searchIcon} alt="searchIcon" className="m-0" />
    </div>
  );
};
