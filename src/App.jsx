import React from 'react';
import './index.css';

import { NavBar } from './Components/navbar.jsx';

const BarraMenu = () => {
    return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Lola Games</h1>
        {/* <img src="./src/logo-lolagames.png" className="App-logo" alt="logo" /> */}
        <NavBar />
      </header>
    </div>
  )
}

export default BarraMenu;
