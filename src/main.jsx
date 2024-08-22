import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { pokemonReducer } from './reducers/pokemonsReducer.js'
import './index.css'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'

const altCompose =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancers = altCompose(
  applyMiddleware(thunk),
);
const store = createStore(pokemonReducer,composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
