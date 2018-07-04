import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import jQuery from 'jquery';
import App from './component/app';
import First from './component/first';

console.log(`${process.env.WEBPACK_ENV}`);
ReactDOM.render((
  <BrowserRouter basename={process.env.WEBPACK_ENV === 'production' ? '/webpack4_config/dist' : null}>
    <Switch>
      <Route path="/index" component={App} />
      <Route path="/first" component={First} />
      <Redirect from="/" to="/index"></Redirect>
    </Switch>
  </BrowserRouter>
), document.getElementById('react-content'));