import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import * as SessionApi from './util/session_api_util'



document.addEventListener('DOMContentLoaded', () => {
    debugger
    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = SessionApi.login;
    window.signup = SessionApi.signup;
    window.logout = SessionApi.logout;
    window.store = store




  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});



