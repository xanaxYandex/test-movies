import {Component} from '@angular/core';
import {Observable, shareReplay, switchMap} from "rxjs";
import {IMovie} from "../../../models/movie";
import {Store} from "@ngrx/store";
import {MoviesState} from "../../../store/movies/movies.reducer";
import {getMovieById} from "../../../store/movies/movies.actions";
import {
    hasMoviesSelector,
    requestedMovieSelector, movieByIdSelector
} from "../../../store/movies/movies.selectors";
import {ActivatedRoute} from "@angular/router";
import {ICharacter} from "../../../models/character";
import {filteredCharactersSelector} from "../../../store/characters/characters.selectors";
import {getIdFromUrl} from "../../../shared/utils";
import {getCharacters} from "../../../store/characters/characters.actions";

@Component({
    selector: 'app-movie-detailed',
    templateUrl: './movie-detailed.component.html',
})
export class MovieDetailedComponent {
    public movie$: Observable<IMovie | null> = this.store.select(hasMoviesSelector)
        .pipe(
            switchMap((hasMovies) => {
                if (hasMovies) {
                    return this.store.select(movieByIdSelector(this.route.snapshot.params['id']));
                } else {
                    this.store.dispatch(getMovieById({movieId: this.route.snapshot.params['id']}));
                    return this.store.select(requestedMovieSelector);
                }
            }),
            shareReplay(1)
        );
    public chars$: Observable<ICharacter[]> = this.movie$.pipe(
        switchMap((movie) => {
            const charIds = movie?.characters.map(url => getIdFromUrl(url)) || [];
            return this.store.select(filteredCharactersSelector(charIds));
        })
    )

    constructor(private store: Store<MoviesState>, private route: ActivatedRoute) {
        this.store.dispatch(getCharacters());
    }

}
