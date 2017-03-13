/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import App from './mobile/components/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import appReducer from './common/redux/Reducer';
import { reducer as formReducer } from 'redux-form';

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

export default class ReactWebWithNative extends Component {
  render() {
      let store = createStore(combineReducers({
              appReducer,
              form : formReducer
          }
      ));
      return (
          <Provider store={store}>
            <App />
          </Provider>
      );
  }
}

AppRegistry.registerComponent('ReactWebWithNative', () => ReactWebWithNative);
