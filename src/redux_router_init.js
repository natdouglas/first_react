/* External dependencies */
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {intlReducer} from 'react-intl-redux';

/* Internal dependencies */
import appReducer from './reducers/app_reducer.js';
import routerReducer from './reducers/router_reducer.js';

////////////////////////////////////////////////

/**
 * Combine reducers into root reducer and create store.
 * 'combineReducers' is a redux-immutable version
 */
const rootReducer = combineReducers({
  app: appReducer,
  routing: routerReducer,
  intl: intlReducer
});
const initialState = Immutable.Map({});

const store = createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension() // Enable redux dev tools
);

console.log(store);

/* Create enhanced history object for router */
const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('routing'); // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState()
});

//const history = syncHistoryWithStore(browserHistory, store);

////////////////////////////////////////////////

/* Exports */
export { store, history }