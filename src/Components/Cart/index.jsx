import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { CartProduct } from "../CartProduct";
import "./styles.css";

export const Cart = () => {
  const {
    clearCart,
    totalPrice,
    cartLength,
    setCountState,
    cart
  } = useContext(CartContext);

  const [btnClearColor, setBtnClearColor] = useState("#000000");
  const [btnClearBckColor, setBtnClearBckColor] = useState("#ffffff");

  return (
    <>
    { cart.length > 0 
      ?
      <div className="carrito m-2">
      <h2 className="text-center fs-2">Detalle de tu compra</h2>
      <span className="carrito ">
        {cart.map((element) => {
          return (
          <CartProduct element={element}/>
          )
      })}
      </span>
      <div>Total de productos en el carrito: {cartLength}</div>
      <div>Precio total de tu compra: $ {totalPrice}</div>
      <button
        style={{ color: btnClearColor, backgroundColor: btnClearBckColor }}
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
      >
        Vaciar carrito
      </button>
      <div>
        <Link
          to="/"
          onClick={() => {
            setCountState(true);
          }}
          className="link"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
    : <div>No tienes productos en tu carrito</div>
    }
    </>
  ) 
};
