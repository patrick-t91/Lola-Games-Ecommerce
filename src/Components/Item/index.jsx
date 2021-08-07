import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'


 export const Item = ({producto}) => {
    const [color, setColor] = useState('#ffffff')
    const [colorCat, setColorCat] = useState('#ffffff')

    return (
        <div key={producto.id} className="itemclass"> 
            <Link to={`/category/${producto.Categoria}`} className="link">
                <h4 style={{color: colorCat}} onMouseOver={() => {setColorCat('#8b1626')}} onMouseLeave={() => 
                {setColorCat('#ffffff')}} className="text-end fs-6 
                mt-1 mr-1 fst-italic border border-bottom-1 border-light">
                    {producto.Categoria}
               </h4>
            </Link>
            <div className="text-center">
                <Link to={`/producto/${producto.id}`} className="link">
                    <div className="text-center">
                        <img src={producto.img} alt="imagen-producto" className="img-productos h-25 w-50"/>
                    </div>
                    <h3 style={{color: color}} onMouseOver={() => {setColor('#8b1626')}} 
                    onMouseLeave={() => {setColor('#ffffff')}} className="fs-5">{producto.Producto}</h3>
                    <h3 style={{color: color}} onMouseOver={() => {setColor('#8b1626')}} 
                    onMouseLeave={() => {setColor('#ffffff')}} className="fs-6">Precio: $ {producto.Precio}</h3>
                </Link>
            </div>
        </div>  
        
    )
 }
