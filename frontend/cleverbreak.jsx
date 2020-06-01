import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';



// document.addEventListener('DOMContentLoaded', () => {
//   // let store;
//   // if (window.currentUser) {
//   //   const { currentUser } = window;
//   //   const { id } = currentUser;
//   //   const preloadedState = { 
//   //     entitities: {
//   //       users: {
//   //         [id]: currentUser
//   //       }
//   //     },
//   //     session: { id }
//   //     };
//   //   store = configureStore(preloadedState);
  
//   //   delete window.currentUser;

//   // } else {
//   //   store = configureStore();
//   // }
//   const root = document.getElementById('root');
//   ReactDOM.render(<h1>I Work</h1>, root);
// });



document.addEventListener("DOMContentLoaded", () => {


  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
})