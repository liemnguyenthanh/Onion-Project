import React, { useState, useEffect } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import PageHome from './PageHome';
import PageLogin from './PageLogin';
const user = localStorage.getItem('user')

const PrivateLoginRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
      user === null
          // true
          ? <PageLogin/> :
          <Redirect to='/buy'/>
  )}/>
)

const PrivateRoute = ({component: Component, ...rest}) => (
  < Route {...rest} render={(props) => (
      user
          ?
          <PageHome/>
          : <Redirect to='/login'/>
  )}/>
)

const App = () => {
  
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/sale" />
          )}/>
          <Route exact path="/login">
              <Route render={props => <PrivateLoginRoute {...props} />}/>
          </Route>
          <Route exact path={['/sale' , '/buy' , "/buy-detail/:id"]}>
              <Route render={props => <PrivateRoute {...props} />}/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
