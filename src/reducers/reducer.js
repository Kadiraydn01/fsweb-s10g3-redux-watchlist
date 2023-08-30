import {
  ADD_LIST,
  NEXT_MOVIE,
  PREV_MOVIE,
  REMOVE_LIST,
} from "../actions/action";
import { movies } from "../movies";

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const movie = state.movies[state.sira];
      return {
        ...state,
        sira: state.sira + 1,
        favMovies: [...state.favMovies, movie],
      };
    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case PREV_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };
    case REMOVE_LIST:
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
