import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import GlobalStore from './GlobalStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={GlobalStore}>
  <App />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>
);


