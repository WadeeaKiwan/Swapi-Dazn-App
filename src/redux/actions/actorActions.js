import { GET_ACTORS, GET_ACTOR_MOVIES, GET_MOVIE, LOADING } from "../types";
import axios from "axios";

export const getActors = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios.get("http://swapi.dev/api/people/");

    dispatch({
      type: GET_ACTORS,
      payload: res.data.results
    });
  } catch (error) {
    console.log(error);
  }
};

export const getActorMovies = (actorUrl) => async (dispatch) => {
  try {
    const res = await axios.get("http://swapi.dev/api/films/");

    let movies = res.data.results.filter((movie) => movie.characters.includes(actorUrl));
    // console.log(movies);

    dispatch({
      type: GET_ACTOR_MOVIES,
      payload: movies
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios.get(`http://swapi.dev/api/films/${movieId}`);

    dispatch({
      type: GET_MOVIE,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
