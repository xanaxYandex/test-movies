import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, map, of, switchMap} from "rxjs";
import {MoviesService} from "../../services/movies.service";
import {
    getMovieById,
    getMovieByIdError,
    getMovieByIdSuccess,
    getMovies,
    getMoviesError,
    getMoviesSuccess
} from "./movies.actions";

@Injectable()
export class MoviesEffects {

    getMovies$ = createEffect(() => this.actions$
        .pipe(
            ofType(getMovies),
            switchMap(() =>
                this.moviesService.getMovies().pipe(
                    map((movies) => getMoviesSuccess({movies: movies.results})),
                    catchError(() => of(getMoviesError()))
                )
            )
        )
    );

    getMovieById$ = createEffect(() => this.actions$
        .pipe(
            ofType(getMovieById),
            switchMap(({movieId}) =>
                this.moviesService.getMovieById(movieId).pipe(
                    map((movie) => getMovieByIdSuccess({movie})),
                    catchError(() => of(getMovieByIdError()))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private moviesService: MoviesService
    ) {
    }
}
