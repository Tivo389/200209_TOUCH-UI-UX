import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import DeviceEvent from './DeviceEvent';
import AnchorEventAlpha from './AnchorEventAlpha';
import AnchorEventBeta from './AnchorEventBeta';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/deviceEvent" component={DeviceEvent}/>
      <Route exact path="/anchorEventAlpha" component={AnchorEventAlpha}/>
      <Route exact path="/anchorEventBeta" component={AnchorEventBeta}/>
    </Switch>
  </BrowserRouter>
);

export default Router;