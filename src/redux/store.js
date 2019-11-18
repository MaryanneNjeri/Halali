import { createStore, applyMiddleware } from 'redux';
// redux-thunk middleware allows asynchronous use of dispatch;
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
