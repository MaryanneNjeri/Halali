import React, { Component } from 'react';
import './index.css';
import { store } from './redux/store';
import Routes from './Routes';
import {Provider} from "react-redux";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <main id="content" className="p-5">
            <Routes/>
          </main>
        </Provider>
    );
  }
}

export default App;
