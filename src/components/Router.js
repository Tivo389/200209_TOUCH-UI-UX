import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import DeviceEvent from './DeviceEvent';
import AnchorEvent from './ctaAnchorEvent';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/deviceEvent" component={DeviceEvent}/>
      <Route exact path="/anchorEvent" component={AnchorEvent}/>
    </Switch>
  </BrowserRouter>
);

export default Router;