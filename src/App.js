import React, { Component } from 'react';
import './index.css';
import { store } from './redux/store';
import Routes from './Routes';
import {Provider} from "react-redux";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Routes/>
          </div>
        </Provider>
    );
  }
}

export default App;
