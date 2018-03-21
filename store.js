import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './main/reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

const middleware=applyMiddleware(promise(),thunk,logger);

const store=createStore(reducer,compose(middleware,window.devToolsExtension?window.devToolsExtension():(f)=>f));
export default store;