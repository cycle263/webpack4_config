import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import jQuery from 'jquery';
import App from './component/app';
import First from './component/first';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/index" component={App} />
      <Route path="/first" component={First} />
      <Redirect from="/" to="/index"></Redirect>
    </Switch>
  </BrowserRouter>
), document.getElementById('react-content'));