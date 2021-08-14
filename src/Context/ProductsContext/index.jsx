import { createContext, useState, useEffect } from "react";
import { getFirestore } from "../../Firebase/client.jsx";

export const ProductsContext = createContext();

export const ProductsContextComponent = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const dataBase = getFirestore(); // Conexion a la base de datos
    const productsCollection = dataBase.collection("productos");
    async function getData  ()  {
      const response = await productsCollection.get(); // Tomar la coleccion de productos
      if (response.size === 0) {
        alert("No hay productos disponibles!");
      } else {
        setProductos(response.docs.map((element) => element.data()));
      }
    };
    getData();
  }, []);

  return <ProductsContext.Provider value={{ productos }} />;
};
