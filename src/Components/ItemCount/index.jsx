import { useState } from 'react';

 
export const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial)
    const addHandler = () => {
        setCounter(counter + 1)
    }
    const substractHandler = () => {
        setCounter(counter - 1)
    }
    const doNothing = () => {
        setCounter(counter + 0)
    }
    return (
        <>
            <div className="text-center margin mb-2">
                <button onClick={() => {counter > initial ? substractHandler() : doNothing() }}>-</button>
                    <span className="border border-dark border-2 margin ms-1 me-1 padding p-1">Cantidad de productos en el carrito: {counter}</span>
                <button onClick={() => {stock > counter ? addHandler () : alert("No hay más stock disponible de este producto")}}>+</button>
            </div>
            <div className="text-center">
                <button type="submit" onClick={() => {onAdd(counter)}}> Agregar al carrito </button>
            </div>
        </>
    )
}