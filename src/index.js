import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from "./redux/store"
import "./styles/reset.css"

const store = configureStore();

render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
)