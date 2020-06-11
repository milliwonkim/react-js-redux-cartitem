import React from "react";
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import "./styles.css";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}
