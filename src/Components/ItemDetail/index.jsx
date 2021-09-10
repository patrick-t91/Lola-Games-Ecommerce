import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount";
import { CartContext } from "../../Context/CartContext";
import "./styles.scss";

export const ItemDetail = ({ item }) => {
  const { addItem, countState, setCountState } = useContext(CartContext);

  useEffect(() => {
    if (item.Stock === 0) {
      alert("En este momento no tenemos stock de este producto");
    }
  }, [item.Stock]);

  return (
    <div className="itemDetailClass border border-dark border-2">
      <div className="imgDetailContainer">
        <img src={item.img} alt="imagen-producto" className="img-fluid p-1" />
      </div>
      <div className="col itemDescription p-2">
        <h2>{item.Producto}</h2>
        <p className="fs-4 text-light">Precio: $ {item.Precio}</p>
        <p
          className="fs-4"
          style={
            item.Stock > 0
              ? { color: "#ffffff" }
              : { color: "red", textAlign: "center" }
          }
        >
          {item.Stock > 0 ? `Stock: ${item.Stock} unidades` : "Sin stock"}
        </p>
        <div className="border border-dark border-1 mb-2 bg-light">
          <h3>Características del producto</h3>
          <p>{item.Description}</p>
        </div>
        <div>
          {item.Stock > 0 ? (
            countState ? (
              <ItemCount
                stock={item.Stock}
                initial={item.Stock > 0 ? 1 : 0}
                addItem={addItem}
                item={item}
              />
            ) : (
              <div className="d-flex justify-content-between mb-2">
                <Link
                  className="link"
                  to={"/cart"}
                  onClick={() => {
                    setCountState(true);
                  }}
                >
                  Finalizar compra
                </Link>
                <Link
                  className="link"
                  to={`/category/${item.Categoria}`}
                  onClick={() => {
                    setCountState(true);
                  }}
                >
                  Ver productos similares
                </Link>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};
