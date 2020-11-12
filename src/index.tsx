import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux"
import App from './App';
import { rootReducer } from './store/reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

const app = (
   <Provider store={store}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </Provider>
)

render(app, document.getElementById('root'));
