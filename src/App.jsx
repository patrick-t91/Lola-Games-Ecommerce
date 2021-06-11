import React from 'react';
import logo from './logo.svg';
import './App.css';

import { CardComponent } from './Components/CardComponent/index.jsx';

const CardProduct = () => {
  const product = [
    {id:1, name: 'Nike', price: 9999},
    {id: 2, name: "Puma", price: 8000}
  ]
    return (
    <div className="App">
      <header className="App-header bg-dark">
        <h1>Lola Games</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <input type="hidden"/>
        <div style={{ backgroundColor:  "#eeeeee"}}></div>
        <hr />
        <br />
        <CardComponent producto={product[0]} title={'Hola'}/>
      </header>
    </div>
  )
}

export default CardProduct;
