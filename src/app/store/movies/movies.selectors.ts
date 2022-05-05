import {MoviesState} from "./movies.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {getIdFromUrl} from "../../shared/utils";

export const moviesState = createFeatureSelector<MoviesState>('movies')

export const moviesSelector = createSelector(moviesState, (state) => state.movies);

export const movieByIdSelector = (id: string) => createSelector(
    moviesSelector,
    (movies) => movies.find(movie => getIdFromUrl(movie.url) === id) || null
);

export const filteredMoviesSelector = (ids: string[]) => createSelector(
    moviesSelector,
    (movies) => movies.filter(movie => ids.includes(getIdFromUrl(movie.url))) || []
);

export const requestedMovieSelector = createSelector(moviesState, (state) => state.selectedMovie);

export const hasMoviesSelector = createSelector(moviesState, (state) => state.hasValue);

export const moviesLoadingSelector = createSelector(moviesState, (state) => state.isLoading);
