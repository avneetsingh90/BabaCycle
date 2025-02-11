import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/reducers';
import IState from '../models/IState';
const middlewares: any[] = [];
middlewares.push(thunk);
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const store = applyMiddleware(...middlewares)(createStore)(reducers);
export default store;
