import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import DeviceEvent from './DeviceEvent';
import ButtonEvent from './ButtonEvent';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/deviceEvent" component={DeviceEvent}/>
      <Route exact path="/buttonEvent" component={ButtonEvent}/>
    </Switch>
  </BrowserRouter>
);

export default Router;