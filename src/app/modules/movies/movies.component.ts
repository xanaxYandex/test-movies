import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {MoviesState} from "../../store/movies/movies.reducer";
import {hasMoviesSelector, moviesLoadingSelector, moviesSelector} from "../../store/movies/movies.selectors";
import {getMovies} from "../../store/movies/movies.actions";
import {Observable, switchMap} from "rxjs";
import {IMovie} from "../../models/movie";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
    public movies$: Observable<IMovie[]> = this.store.select(hasMoviesSelector).pipe(
        switchMap((hasChars) => {
            if (!hasChars) {
                this.store.dispatch(getMovies());
            }
            return this.store.select(moviesSelector);
        })
    );
    public isLoading$: Observable<boolean> = this.store.select(moviesLoadingSelector);

    constructor(private store: Store<MoviesState>) {
    }

}
