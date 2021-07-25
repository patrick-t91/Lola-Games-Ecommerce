import { NavBar } from '../NavBar';
import './styles.css'


export const Header = () => {
    return (
    <header className="App-header p-2">
        <NavBar/>
        <div>
        <h1 className="title text-center">Lola Games</h1>
        </div> 
    </header>
  )
}