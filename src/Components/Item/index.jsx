import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount'
import './estilos.css'


 export const Item = ({item}) => {
    const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} productos al carrito`)
    }
    return (
        <>
        <Link to={`/item/${item.id}`}>
            <div key={item.id} className="itemclass"> 
                <div className="text-center">
                     <img src={item.img} alt="imagen-producto" className="img-productos"/>
                </div>
                <h2>{item.producto}</h2>
                <h3>Precio: $ {item.precio}</h3>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>  
        </Link>
        </>
    )
 }
