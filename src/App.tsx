/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import { Switch,Route } from 'react-router';
import MorocoFood from './pages/marocainPages/HomePages-Moroco';
import ShopPage from './pages/Shop/ShopPage.component';


function App() {
  return (
  <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/Marocain' component={MorocoFood}/>
      <Route  path='/Shop' component={ShopPage}/>
    </Switch>
  </div>
  );
}

export default App;
