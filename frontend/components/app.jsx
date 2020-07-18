import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch, Link } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DashboardContainer from './dashboard/dashboard_container';
import Modal from './modal/modal_container';


const App = () => (
  <div>
    <Modal/>
    <header>
    </header>
    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path='/dashboard' component={DashboardContainer} />
    </Switch>
  </div>

);

export default App;
