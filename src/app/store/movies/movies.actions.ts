import {createAction, props} from "@ngrx/store";
import {IMovie} from "../../models/movie";
import {MoviesActions} from "./movies.enum";

export const getMovies = createAction(MoviesActions.GET_MOVIES);
export const getMoviesSuccess = createAction(MoviesActions.GET_MOVIES_SUCCESS, props<{movies: IMovie[]}>());
export const getMoviesError = createAction(MoviesActions.GET_MOVIES_ERROR);
export const getMovieById = createAction(MoviesActions.GET_MOVIE_BY_ID, props<{movieId: string}>());
export const getMovieByIdSuccess = createAction(MoviesActions.GET_MOVIE_BY_ID_SUCCESS, props<{movie: IMovie}>());
export const getMovieByIdError = createAction(MoviesActions.GET_MOVIE_BY_ID_ERROR);
