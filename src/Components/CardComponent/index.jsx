import React from 'react';
import './styles.css';

// export const CardComponent = (props) => { // Props son datos, información que se le pasa a una función (son los parámetros; por ej., a una card se le puede pasar el precio, el nombre de un producto, etc.)
//     return (
//         <div className="card">
//             <h1>{props.productData.name}</h1>
//             <strong>{props.productData.price}</strong>
//         </div>
//     )
// }

export const CardComponent = ({producto, title}) => { // Acá hicimos destructuring del objeto props
    return (
            <div className="card">
                <h2>{title}</h2>
                <h1>{producto.name}</h1>
                <strong>{producto.price}</strong>
            </div>
    )
}