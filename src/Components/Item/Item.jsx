import { ItemCount } from '../ItemCount'

 export const Item = ({item}) => {
    const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} productos al carrito`)
    }
return (
<>
    <li key={item.id}>
        <h2>{item.producto}</h2>
        <h3>{item.precio}</h3>
        <img src={item.img} alt="imagen-producto" />
    </li>
    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
</>
)
 }