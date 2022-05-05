import {IMovie} from "../../models/movie";
import {createReducer, on} from "@ngrx/store";
import {
    getMovieById,
    getMovieByIdError,
    getMovieByIdSuccess,
    getMovies,
    getMoviesError,
    getMoviesSuccess
} from "./movies.actions";

export interface MoviesState {
    selectedMovie: IMovie | null;
    movies: IMovie[];
    isLoading: boolean;
    hasValue: boolean;
}

export const initialState: MoviesState = {
    selectedMovie: null,
    movies: [],
    isLoading: false,
    hasValue: false
};

export const moviesReducer = createReducer(
    initialState,
    on(getMovies, state => ({ ...state, isLoading: true})),
    on(getMoviesSuccess, (state, action) => ({ ...state, movies: action.movies, isLoading: false, hasValue: true})),
    on(getMoviesError, state => ({ ...state, movies: [], hasValue: false, isLoading: false})),
    on(getMovieById, state => ({ ...state, isLoading: true})),
    on(getMovieByIdSuccess, (state, action) => ({ ...state, selectedMovie: action.movie, isLoading: false})),
    on(getMovieByIdError, state => ({ ...state, selectedMovie: null, hasValue: false, isLoading: false})),
);
