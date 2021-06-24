// import { Item } from './Item.jsx'
import '../../products.json'

export const ItemList = () => {
    async function getData () {
    const response = await fetch ("../../products.json") 
    const data = await response.json();
    return (data)
        }
    console.log(getData())

    return (
        <div>
            
        </div>
    )
}