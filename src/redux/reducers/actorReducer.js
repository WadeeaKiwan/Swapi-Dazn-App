import { GET_ACTORS, GET_MOVIE, LOADING, SEARCH_ACTORS } from "../types";

const initialState = {
  actors: [],
  filteredActors: [],
  movie: {},
  isSearching: false,
  loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTORS:
      return {
        ...state,
        actors: payload,
        isSearching: false,
        loading: false
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_ACTORS:
      return {
        ...state,
        isSearching: true,
        filteredActors: payload,
        loading: false
      };
    default:
      return state;
  }
};
