import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>LOGIN RENDERS</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

    </Switch>
  </div>
);

export default App;
