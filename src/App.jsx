import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar'
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './Containers/ItemDetailContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
            <Route path="/categories" component={ItemDetailContainer}/>
          </Switch> 
          <Footer /> 
      </BrowserRouter> 
  )
}

export default App;
