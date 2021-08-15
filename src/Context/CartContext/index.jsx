import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getFirestore } from "../../Firebase/client.jsx";

export const CartContext = createContext();

export const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartLength, setCartLength] = useState(0);
  const [countState, setCountState] = useState(true);
  const history = useHistory();

  // Manipulación de elementos del carrito
  const addItem = (item, quantity) => {
    const producto = cart.find((element) => element.item.id === item.id);
    if (producto) {
      producto.quantity += quantity;
      setCart([...cart]);
    } else {
      const cartAux = [
        ...cart,
        {
          item,
          quantity,
        },
      ];
      setCart(cartAux);
    }
    setCountState(false);
  };

  useEffect(() => {
    setCountState(true);
  }, [history]);

  const removeItem = (item) => {
    let itemsToStay = cart.filter((element) => element.item !== item);
    setCart(itemsToStay);
    if (cart.length <= 1) {
      localStorage.clear();
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.clear();
  };

  // Actualizar precio y cantidad de items del carrito
  useEffect(() => {
    let totalPrice = 0;
    for (let producto of cart) {
      totalPrice += producto.item.Precio * parseInt(producto.quantity);
    }
    return setTotalPrice(totalPrice);
  }, [cart]);

  useEffect(() => {
    let cartLength = 0;
    for (let producto of cart) {
      cartLength += producto.quantity;
    }
    return setCartLength(cartLength);
  }, [cart]);

  // Almacenamiento del carrito en Local Storage
  useEffect(() => {
    if (cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    let savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setCart(savedCart);
  }, []);

  //Crear orden de compra
  const createOrder = (name, email, phone) => {
    const dataBase = getFirestore();
    const batch = dataBase.batch();
    let products = dataBase.collection("productos");
    const order = {
      buyer: { name, email, phone },
      items: cart,
      price: totalPrice,
    };
    dataBase
      .collection("orders")
      .add(order)
      .then(id => console.log(id))
 
        cart.forEach((element) => batch.update(products.doc(element.item.id), { Stock: element.item.Stock - element.quantity}));
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        cartLength,
        countState,
        setCountState,
        addItem,
        removeItem,
        clearCart,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
