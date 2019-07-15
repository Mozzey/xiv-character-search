import {
  SEARCH_CHARACTER,
  GET_SERVER_LIST,
  IS_LOADING,
} from './search-form.types';

const initialState = {
  loading: false,
};

const searchFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_CHARACTER:
      return {
        ...state,
        characters: payload.Results,
        loading: false,
      };
    case GET_SERVER_LIST:
      return {
        ...state,
        servers: payload,
        loading: false,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

export default searchFormReducer;
