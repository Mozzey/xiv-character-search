import { combineReducers } from 'redux';

import characterSearchReducer from './search/search.reducers';

const rootReducer = combineReducers({
  characterSearchResults: characterSearchReducer,
});

export default rootReducer;
