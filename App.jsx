import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/acerca-de'>
            <AcercaDe />
          </Route>
          <Route exact path='/contacto'>
            <Contacto />
          </Route>
          <Route exact path='/'>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

