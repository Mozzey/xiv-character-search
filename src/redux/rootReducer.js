import { combineReducers } from 'redux';

import searchFormReducer from './search-form/search-form.reducers';

const rootReducer = combineReducers({
  search: searchFormReducer,
});

export default rootReducer;
