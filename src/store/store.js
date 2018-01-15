import { routerMiddleware } from 'react-router-redux'; //
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducer/rootReducer';

// const middleware = applyMiddleware(thunk)

// const configureStore = createStore(rootReducer, middleware);

/* to support redx dev tool in browser write the following code*/
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);


const configureStore = createStore(rootReducer, enhancer);

export default configureStore;
