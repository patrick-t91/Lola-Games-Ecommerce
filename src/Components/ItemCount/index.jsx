import { useState } from "react";
import "./styles.scss";

export const ItemCount = ({ stock, initial, addItem, item }) => {
  const [counter, setCounter] = useState(initial);
  const [btnColor, setBtnColor] = useState("#000000");
  const [btnBckColor, setBtnBckColor] = useState("#ffffff");

  const addHandler = () => {
    setCounter(counter + 1);
  };

  const substractHandler = () => {
    counter > initial ?
    setCounter(counter - 1)
    : setCounter(counter - 0)
  };

  return (
    <div className="itemCountContainer">
      <div className="itemCountSup text-center">
        <button
          onClick={() => {
            substractHandler()
          }}
        >
          -
        </button>
        <div className="border border-dark border-2 p-1 bg-light">
          Cantidad: {counter}
        </div>
        <button
          onClick={() => {
            stock && stock > counter
              ? addHandler()
              : alert("No hay más stock disponible de este producto");
          }}
        >
          +
        </button>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn-principal"
          style={{ color: btnColor, backgroundColor: btnBckColor }}
          onClick={() => {
            addItem(item, counter);
          }}
          onMouseOver={() => {
            setBtnColor("#ffffff");
            setBtnBckColor("#000000");
          }}
          onMouseLeave={() => {
            setBtnColor("#000000");
            setBtnBckColor("#ffffff");
          }}
        >
          Agregar al carrito{" "}
        </button>
      </div>
    </div>
  );
};
