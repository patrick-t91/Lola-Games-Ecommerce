import { ItemCount } from '../ItemCount'
import './estilos.css'

 export const Item = ({item}) => {
    const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} productos al carrito`)
    }
return (
<>
    <div key={item.id} className="itemclass">
        <h2>{item.producto}</h2>
        <img src={item.img} alt="imagen-producto" className="img-productos"/>
        <h3>Precio: $ {item.precio}</h3>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
    
</>
)
 }