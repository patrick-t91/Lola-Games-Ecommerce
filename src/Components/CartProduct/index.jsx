import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './styles.scss'

export const CartProduct = ({ element }) => {
  const { addItem, removeItem, cart } = useContext(CartContext);
  const [btnAddColor, setBtnAddColor] = useState("#000000");
  const [btnAddBckColor, setBtnAddBckColor] = useState("#ffffff");
  const [btnDltColor, setBtnDltColor] = useState("#000000");
  const [btnDltBckColor, setBtnDltBckColor] = useState("#ffffff");
  const [seeProductBtnColor, setSeeProductBtnColor] = useState("#000000");
  const [seeProductBtnBckColor, setSeeProductBtnBckColor] = useState("#ffffff");

  return (
    <>
      <div className="d-flex justify-content-center b-2 p-2 border border-top-1 border-bottom-1 border-light">
        <span className="orden fs-3 m-3 ">{cart.indexOf(element) + 1}</span>
        <span key={element.item.id}>
          <div>{element.item.Producto}</div>
          <img
            src={element.item.img}
            alt="imagen-producto"
            style={{ width: "15%" }}
            className="img-productos img-fluid"
          />
          <div>Cantidad en el carrito: {element.quantity}</div>
          <button
            style={{
              color: btnAddColor,
              backgroundColor: btnAddBckColor,
            }}
            onClick={() => {
              element.item.Stock > element.quantity
                ? addItem(element.item, 1)
                : alert("No hay más stock de este producto");
            }}
            onMouseOver={() => {
              setBtnAddColor("#ffffff");
              setBtnAddBckColor("#000000");
            }}
            onMouseLeave={() => {
              setBtnAddColor("#000000");
              setBtnAddBckColor("#ffffff");
            }}
            className="m-1"
          >
            Agregar más unidades de este producto
          </button>
          <button
            style={{
              color: btnDltColor,
              backgroundColor: btnDltBckColor,
            }}
            onClick={() => {
              removeItem(element.item);
            }}
            onMouseOver={() => {
              setBtnDltColor("#ffffff");
              setBtnDltBckColor("#000000");
            }}
            onMouseLeave={() => {
              setBtnDltColor("#000000");
              setBtnDltBckColor("#ffffff");
            }}
          >
            Eliminar producto
          </button>
          <div>
            <Link to={`producto/${element.item.id}`} className="link">
              <button
                className="linkBtn"
                style={{
                  color: seeProductBtnColor,
                  backgroundColor: seeProductBtnBckColor,
                }}
                onMouseOver={() => {
                  setSeeProductBtnColor("#ffffff");
                  setSeeProductBtnBckColor("#000000");
                }}
                onMouseLeave={() => {
                  setSeeProductBtnColor("#000000");
                  setSeeProductBtnBckColor("#ffffff");
                }}
              >
                Ver producto
              </button>
            </Link>
          </div>
        </span>
      </div>
    </>
  );
};
