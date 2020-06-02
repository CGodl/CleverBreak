import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/signup" className="header-link">
        <GreetingContainer />
      </Link>
    </header>
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      {/* <Route exact path="/login" component={LoginFormContainer} /> */}
    </Switch>
  </div>
);

export default App;
