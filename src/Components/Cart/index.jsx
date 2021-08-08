import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { CartProduct } from "../CartProduct";
import "./styles.css";

export const Cart = () => {
  const { clearCart, totalPrice, cartLength, setCountState, cart } =
    useContext(CartContext);

  const [btnClearColor, setBtnClearColor] = useState("#000000");
  const [btnClearBckColor, setBtnClearBckColor] = useState("#ffffff");
  const [btnFinishColor, setBtnFinishColor] = useState("#000000");
  const [btnFinishBckColor, setBtnFinishBckColor] = useState("#ffffff");

  return (
    <>
      {cart.length > 0 ? (
        <div className="carrito m-2">
          <h2 className="text-center fs-2">Detalle de tu compra</h2>
          <span className="carrito ">
            {cart.map((element) => {
              return <CartProduct element={element} />;
            })}
          </span>
          <div className="m-3">
            Total de productos en el carrito: {cartLength}
          </div>
          <div className="m-3">Precio total de tu compra: $ {totalPrice}</div>
          <span>
            <Link to={'/checkout'}>
              <button
                style={{
                  color: btnFinishColor,
                  backgroundColor: btnFinishBckColor,
                }}
                onMouseOver={() => {
                  setBtnFinishColor("#ffffff");
                  setBtnFinishBckColor("#000000");
                }}
                onMouseLeave={() => {
                  setBtnFinishColor("#000000");
                  setBtnFinishBckColor("#ffffff");
                }}
                className="m-3"
              >
                Finalizar compra
              </button>
            </Link>
            <button
              style={{
                color: btnClearColor,
                backgroundColor: btnClearBckColor,
              }}
              onClick={() => {
                clearCart();
              }}
              onMouseOver={() => {
                setBtnClearColor("#ffffff");
                setBtnClearBckColor("#000000");
              }}
              onMouseLeave={() => {
                setBtnClearColor("#000000");
                setBtnClearBckColor("#ffffff");
              }}
              className="m-3"
            >
              Vaciar carrito
            </button>
          </span>
          <div>
            <Link
              to="/"
              onClick={() => {
                setCountState(true);
              }}
              className="link m-4 bg-light"
            >
              Seguir viendo productos
            </Link>
          </div>
        </div>
      ) : (
        <div>No tienes productos en tu carrito</div>
      )}
    </>
  );
};
