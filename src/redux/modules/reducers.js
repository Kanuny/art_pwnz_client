import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as formReducer } from 'redux-form';

import gallery from './gallery';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form: formReducer,

  gallery,
});
