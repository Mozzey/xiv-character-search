import { combineReducers } from 'redux';

import searchFromReducer from './search-form/search-form.reducers';

const rootReducer = combineReducers({
  searchResults: searchFromReducer,
});

export default rootReducer;
