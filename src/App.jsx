import React from 'react';
import './index.css';
import { NavBar } from './Components/NavBar'
// import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './Containers/ItemDetailContainer'


const App = () => {
    return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Lola Games</h1>
        {/* <img src="./src/logo-lolagames.png" className="App-logo" alt="logo" /> */}
        <NavBar />
      </header>
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  )
}

export default App;
