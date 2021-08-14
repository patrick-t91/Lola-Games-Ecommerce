import { useContext, useState } from 'react';
import { ProductsContextComponent } from '../../Context/ProductsContext'

export const SearchInput = () => {
    const { productos } = useContext(ProductsContextComponent)
    const [value, setValue] = useState()

    const filterProducts = () => {
        return productos.filter(
          (producto) =>
            (producto.Producto.toLowerCase() || producto.Categoria.toLowerCase() || producto.Description.toLowerCase())
              .includes(value)
        );
      };

    return (
        <input placeholder="Buscar producto" onInput={(e) => {setValue(e); filterProducts()}}/>
    )
}