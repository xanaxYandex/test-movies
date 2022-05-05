import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {MoviesState} from "../../store/movies/movies.reducer";
import {moviesLoadingSelector, moviesSelector} from "../../store/movies/movies.selectors";
import {getMovies} from "../../store/movies/movies.actions";
import {Observable, tap} from "rxjs";
import {IMovie} from "../../models/movie";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    public movies$: Observable<IMovie[]> = this.store.select(moviesSelector);
    public isLoading$: Observable<boolean> = this.store.select(moviesLoadingSelector);

    constructor(private store: Store<MoviesState>) {
    }

    public ngOnInit(): void {
        this.store.dispatch(getMovies());
    }

}
