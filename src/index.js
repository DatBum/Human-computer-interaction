import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import appReducers from './reducers/index';
import App from './App';
import * as sectionNames from './admin/constants/SectionNames';

const initialState = {}

const store = createStore(
	appReducers,
	initialState,
	applyMiddleware(thunk),
);

ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
