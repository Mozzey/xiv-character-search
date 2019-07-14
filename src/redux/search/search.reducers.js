import { SEARCH_CHARACTER } from './search.types';

const initialState = {};

const characterSearchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_CHARACTER:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default characterSearchReducer;
