import { createContext, useState, useEffect } from "react";
import { getFirestore } from "../../Firebase/client.jsx";

export const ProductsContext = createContext();

export const ProductsContextComponent = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [value, setValue] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([])
  
  
  useEffect(() => {
    const dataBase = getFirestore(); // Conexion a la base de datos
    const productsCollection = dataBase.collection("productos");
    async function getData() {
      const response = await productsCollection.get(); // Tomar la coleccion de productos
      if (response.size === 0) {
        alert("No hay productos disponibles!");
      } else {
        setProductos(response.docs.map((element) => element.data()));
      }
    }
    getData();
  }, []);

  const filterProducts = (products, value) => {
    if (value.length > 0) {
      let arrayFiltrado = products.filter((producto) => {
        return (
          (producto.Producto.toLowerCase()||
          producto.Categoria.toLowerCase())
        .includes(value.toLowerCase())
        )
      });
      setProductosFiltrados(arrayFiltrado)
    } else setProductosFiltrados([])
  };

  return (
    <ProductsContext.Provider
      value={{ productos, productosFiltrados, value, setValue, filterProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
