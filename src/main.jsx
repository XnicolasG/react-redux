import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { legacy_createStore as createStore } from 'redux'
import { pokemonReducer } from './reducers/pokemonsReducer.js'
import './index.css'
import { Provider } from 'react-redux'


const store = createStore(pokemonReducer);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
