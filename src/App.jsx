import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ShopContextComponent } from './Context'
import { Header } from './Components/Header'
import { ItemListContainer } from './Containers/ItemListContainer'
import { ItemDetailContainer } from './Containers/ItemDetailContainer'
import { Cart } from './Components/Cart'
import { Footer } from './Components/Footer'

const App = () => { 
    return (
      <ShopContextComponent>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/category/:categoryId" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="/cart" component={Cart}/>
          </Switch> 
          <Footer /> 
        </BrowserRouter>
      </ShopContextComponent>   
  )
}

export default App;
