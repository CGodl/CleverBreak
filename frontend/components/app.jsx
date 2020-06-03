import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch, Link } from 'react-router-dom';
import SignupFormContainer from './session_form/session_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header>
      <h1>THIS IS APP</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
    </Switch>
  </div>

);

export default App;
