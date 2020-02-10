import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import DeviceEventConfirmation from './DeviceEventConfirmation';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/deviceEventConfirmation" component={DeviceEventConfirmation}/>
    </Switch>
  </BrowserRouter>
);

export default Router;