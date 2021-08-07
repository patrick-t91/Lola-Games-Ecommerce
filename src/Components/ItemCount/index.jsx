import { useState } from 'react';

 
export const ItemCount = ({stock, initial, addItem, item}) => {
    const [counter, setCounter] = useState(initial)

    const addHandler = () => {
        setCounter(counter + 1)
    }

    const substractHandler = () => {
        setCounter(counter - 1)
    }
   
    return (
        <>
            <div className="text-center margin mb-2">
                <button onClick={() => {counter > initial ? substractHandler() : null() }}>-</button>
                    <span className="border border-dark border-2 margin ms-1 me-1 padding p-1 bg-light ">Cantidad de este producto en el carrito: {counter}</span>
                <button onClick={() => {stock && stock > counter ? addHandler () : alert("No hay más stock disponible de este producto")}}>+</button>
            </div>
            <div className="text-center">
                <button type="submit" onClick={() => {addItem(item, counter)}}> Agregar al carrito </button>
            </div>
        </>
    )
}