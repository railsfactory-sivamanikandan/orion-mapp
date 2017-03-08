import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from '../store'
import AppContainer from './AppContainer'

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
