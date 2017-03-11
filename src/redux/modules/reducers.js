import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as formReducer } from 'redux-form';

import gallery from './gallery';
import article from './article';
import videos from './videos';
import history from './history';
import locale from './locale';
import modal from './modal';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form: formReducer,

  gallery,
  article,
  videos,
  history,
  locale,
  modal,
});
