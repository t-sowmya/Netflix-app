import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from "./redux/store";

function App() {
  return (
    <Provider store={store} >
      <Header />
      <Main />
    </Provider>

  );
}

export default App;
