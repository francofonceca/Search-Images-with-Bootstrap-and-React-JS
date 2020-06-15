import React, { Component } from 'react';
//REACT ROUTER, CREANDO UN SPA
import {Switch, Route } from 'react-router-dom'
import { Details } from './pages/Details.js';
import './App.css';
import 'bulma/css/bulma.css';
import { Home } from './pages/Home.js';
import { NotFound } from './pages/NotFound.js';
//EL PROYECTO EMPIEZA DESDE EL VIDEO 65 HASTA EL VIDEO 74


class App extends Component {
  
  render(){
    //aca uso switch para poder mostrar la ruta con una / y cuando vaya a detail especificar como mostrar la ruta y ademas paso la id mas el componente a donde va  a ir
    //componente home => te lleva al inicio /home
    //componente home => te lleva a detalles especificos /detail/12389123(supongamos q es una id) 
    return (
      <div className="App">
        
        <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/detail/:id' component={Details}/>
         <Route component = { NotFound }/>
         </Switch>
      </div>
    );

  }
}

export default App;
