import { Link } from 'react-router-dom';
import './estilos.css'


 export const Item = ({item}) => {
    return (
        <>
            <div key={item.id} className="itemclass"> 
                <div className="text-center">
                     <img src={item.img} alt="imagen-producto" className="img-productos"/>
                </div>
                <h2>{item.producto}</h2>
                <h3>Precio: $ {item.precio}</h3>
                <div className="text-center">
                    <Link to={`/item/${item.id}`} className="link">Ver producto</Link>
                </div>
            </div>  
        </>
    )
 }
