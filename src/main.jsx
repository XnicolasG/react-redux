import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { pokemonReducer } from './reducers/pokemonsReducer.js'
import './index.css'
import { Provider } from 'react-redux'
import { logger } from './Middlewares/index.js'

// const composedEnhancers = compose(
//   applyMiddleware(logger()),
//   ,
// );

const store = createStore(pokemonReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
