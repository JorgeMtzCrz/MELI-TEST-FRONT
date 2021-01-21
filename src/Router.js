import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NotFound from './components/404/NotFound.js';
import { Items } from './components/pages/Items';
import { ItemDetail } from './components/pages/ItemDetail';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/items/:id" component={(props)=><ItemDetail {...props}/>}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
