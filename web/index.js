import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import appReducer from '../common/redux/Reducer';
import { reducer as formReducer } from 'redux-form';

let store = createStore(combineReducers({
        appReducer,
        form : formReducer
    }
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);