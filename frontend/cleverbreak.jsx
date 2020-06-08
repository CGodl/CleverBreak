import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


debugger;
document.addEventListener('DOMContentLoaded', () => {
    let store;
    debugger;
    if (window.currentUser) {
      debugger;
      const preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id },
      };
      debugger;
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
    debugger;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});



