import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { RoutReducer } from '../reducer';
import CoctkailDataMiddleware from '../middlewares/CoctkailDataMiddleware';
import LoveDataMiddleware from '../middlewares/LovelDataMiddleware'

const enhancers = [];
const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const composerEnhancers = compose(
    applyMiddleware(...middlewares, CoctkailDataMiddleware, LoveDataMiddleware),
    ...enhancers,
);

const store = createStore(
    RoutReducer,
    {},
    composerEnhancers,
);

export default store;
