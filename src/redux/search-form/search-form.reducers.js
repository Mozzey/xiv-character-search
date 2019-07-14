import { SEARCH_CHARACTER, GET_SERVER_LIST } from './search-form.types';

const initialState = {};

const searchFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_CHARACTER:
      const { Pagination, Results } = payload;

      return {
        ...state,
        characters: Results,
      };
    case GET_SERVER_LIST:
      return {
        ...state,
        servers: payload,
      };
    default:
      return state;
  }
};

export default searchFormReducer;
