import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./styles.css";

export const Checkout = () => {
  const { createOrder, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("phone number");
  const [btnCancelColor, setBtnCancelColor] = useState("#ffffff");
  const [btnCancelBckColor, setBtnCancelBckColor] = useState("#000000");
  const [btnBuyColor, setBtnBuyColor] = useState("#ffffff");
  const [btnBuyBckColor, setBtnBuyBckColor] = useState("#000000");

  return (
    <>
      {" "}
      <div>
        <h3 className="text-center m-3 border-bottom border-dark">
          Por favor, completa los siguientes campos para realizar tu compra
        </h3>
      </div>
      <div className="container">
        <div className="row">
          <label for="name">Ingrese su nombre completo</label>
          <input
            id="name"
            type="text"
            value={name}
            onInput={(e) => {
              setName(e.target.value);
            }}
            placeholder="name"
            className="m-3"
          />
        </div>
        <div className="row">
          <label for="email">Ingrese su correo electrónico</label>
          <input
            id="email"
            type="email"
            value={email}
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
            className="m-3"
          />
        </div>
        <div className="row">
          <label for="phone">Ingrese su número de teléfono celular</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onInput={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="phone"
            className="m-3"
          />
        </div>
      </div>
      <div className="text-center">
        <button
          style={{
            color: btnCancelColor,
            backgroundColor: btnCancelBckColor,
          }}
          onClick={() => {
            clearCart();
          }}
          onMouseOver={() => {
            setBtnCancelColor("#000000");
            setBtnCancelBckColor("#ffffff");
          }}
          onMouseLeave={() => {
            setBtnCancelColor("#ffffff");
            setBtnCancelBckColor("#000000");
          }}
          className="m-3"
        >
          Cancelar
        </button>
        <button
          onClick={() => {
            createOrder(name, phone, email);
            clearCart();
          }}
          style={{ color: btnBuyColor, backgroundColor: btnBuyBckColor }}
          onMouseOver={() => {
            setBtnBuyColor("#000000");
            setBtnBuyBckColor("#ffffff");
          }}
          onMouseLeave={() => {
            setBtnBuyColor("#ffffff");
            setBtnBuyBckColor("#000000");
          }}
          className="m-3"
        >
          Realizar compra
        </button>
      </div>
    </>
  );
};
