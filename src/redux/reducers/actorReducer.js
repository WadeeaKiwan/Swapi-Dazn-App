import { GET_ACTORS, GET_MOVIE, LOADING } from "../types";

const initialState = {
  actors: [],
  movie: {},
  loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTORS:
      return {
        ...state,
        actors: payload,
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
    default:
      return state;
  }
};
