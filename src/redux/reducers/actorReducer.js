import { GET_ACTORS, GET_MOVIE, LOADING, SEARCH_ACTORS } from "../types";

const initialState = {
  actors: [],
  filteredActors: [],
  movie: {},
  searchText: "",
  loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTORS:
      return {
        ...state,
        actors: payload,
        searchText: "",
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
        searchText: payload,
        filteredActors: state.actors.filter(
          (actor) => actor.name.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        ),
        loading: false
      };
    default:
      return state;
  }
};
