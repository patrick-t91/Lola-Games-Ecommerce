import { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export const CartProduct = ({element}) => {
    const [btnAddColor, setBtnAddColor] = useState("#000000");
    const [btnAddBckColor, setBtnAddBckColor] = useState("#ffffff");
    const [btnDltColor, setBtnDltColor] = useState("#000000");
    const [btnDltBckColor, setBtnDltBckColor] = useState("#ffffff");
    const { addItem, removeItem, cart } = useContext(CartContext);

    return (
            <>  
            <div className="d-flex b-2 text-center border border-top-1 border-bottom-1 border-light">
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
                    addItem(element.item, 1);
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
                  <Link to={`producto/${element.item.id}`} className="link bg-light">
                    Ver producto
                  </Link>
                </div>
              </span>
            </div>
        </>
        )
}             
   
