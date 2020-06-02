import React from 'react';
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
        <button>Sign Up</button>
      </Link>
    </header>
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
