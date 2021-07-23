import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from './Components/NavBar'
import { ItemListContainer } from './Containers/ItemListContainer'
import { ItemDetailContainer } from './Containers/ItemDetailContainer'
import { Cart } from './Components/Cart'
import { Footer } from './Components/Footer'

const App = () => { 
    return (
      <BrowserRouter>
        <header className="App-header p-2">
          <NavBar />
          <div>
            <h1 className="title text-center">Lola Games</h1>
          </div> 
        </header>
        <Switch>
          <Route exact path="/" component={ItemListContainer}/>
          <Route path="/category/:categoryId" component={ItemListContainer}/>
          <Route path="/item/:id" component={ItemDetailContainer}/>
          <Route path="/cart" component={Cart}/>
        </Switch> 
        <Footer /> 
      </BrowserRouter> 
  )
}

export default App;
