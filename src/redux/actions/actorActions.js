import { GET_ACTORS, GET_MOVIE, LOADING, SEARCH_ACTORS } from "../types";
import axios from "axios";

import getPage from "../../util/getPage";
import moviePhotoList from "../../util/moviesPhotoArray";

// Helper function to add a photo property to the film object
const selectedMovie = (arr, itemId) => {
  let result = arr.filter((arrItem) => arrItem.episode_id === itemId);
  return { photoUrl: result[0].photoUrl };
};

// Get All Actors with a full film array
export const getActors = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    // Loop over the `next` url to get all actors after they was limited to 10 per request
    let actors = [];
    let page = 1;
    while (page < 10) {
      let newResults = await getPage(page);
      page++;
      actors = [...actors, ...newResults];
    }

    // Fetch all films
    let movieRes = await (await fetch("https://swapi.dev/api/films/")).json();
    movieRes = movieRes.results;

    // Add the photo property to every film to be attached with its film photo
    const movieCompleteList = movieRes.reduce((newMovieArr, curMovie) => {
      newMovieArr = [
        ...newMovieArr,
        { ...curMovie, ...selectedMovie(moviePhotoList, curMovie.episode_id) }
      ];
      return newMovieArr;
    }, []);

    // Replace every film url with the actual film array containing the film photo url
    const allActorsWithMovies = actors.reduce((newActorsArray, curActor) => {
      newActorsArray = [
        ...newActorsArray,
        {
          ...curActor,
          films: [
            ...movieCompleteList.filter(
              (movie) => movie.url === curActor.films[curActor.films.indexOf(movie.url)]
            )
          ]
        }
      ];
      return newActorsArray;
    }, []);

    dispatch({
      type: GET_ACTORS,
      payload: allActorsWithMovies
    });
  } catch (error) {
    console.log(error);
  }
};

// Get the actor film using the movie Id in the url
export const getMovie = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios.get(`https://swapi.dev/api/films/${movieId}`);
    let movieRes = res.data;

    // Add the photo property to the film to be attached with its film photo
    movieRes = { ...movieRes, ...selectedMovie(moviePhotoList, movieRes.episode_id) };

    dispatch({
      type: GET_MOVIE,
      payload: movieRes
    });
  } catch (error) {
    console.log(error);
  }
};

// Search actors by name
export const searchActors = (searchText) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_ACTORS,
      payload: searchText
    });
  } catch (error) {
    console.log(error);
  }
};
