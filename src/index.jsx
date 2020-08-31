import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { setConfiguration } from 'react-grid-system';
import Home from './components/Home';
import Confirm from './components/Confirm';
import './index.scss';

setConfiguration({ maxScreenClass: 'xl' });

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/confirm" component={Confirm} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
