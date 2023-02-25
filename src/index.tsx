import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from "./store/store";
import App from './App';
import { RouteComponent } from './router/router';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteComponent />
    </Provider>
  </React.StrictMode>
);

