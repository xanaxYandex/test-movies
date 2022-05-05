import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {ICharacter} from "../../../models/character";
import {
    characterByIdSelector, filteredCharactersSelector,
    hasCharacterSelector,
    requestedCharacterSelector
} from "../../../store/characters/characters.selectors";
import {getCharacterById} from "../../../store/characters/characters.actions";
import {CharactersState} from "../../../store/characters/characters.reducer";
import {getIdFromUrl} from "../../../shared/utils";
import {getMovies} from "../../../store/movies/movies.actions";
import {filteredMoviesSelector} from "../../../store/movies/movies.selectors";
import {IMovie} from "../../../models/movie";

@Component({
    selector: 'app-character-detailed',
    templateUrl: './character-detailed.component.html',
})
export class CharacterDetailedComponent  {

    public character$: Observable<ICharacter | null> = this.store.select(hasCharacterSelector)
        .pipe(
            switchMap((hasCharacters) => {
                if (hasCharacters) {
                    return this.store.select(characterByIdSelector(this.route.snapshot.params['id']));
                } else {
                    this.store.dispatch(getCharacterById({charId: this.route.snapshot.params['id']}));
                    return this.store.select(requestedCharacterSelector);
                }
            })
        );
    public movies$: Observable<IMovie[]> = this.character$.pipe(
        switchMap((char) => {
            const movieIds = char?.films.map(url => getIdFromUrl(url)) || [];
            return this.store.select(filteredMoviesSelector(movieIds));
        })
    )

    constructor(private store: Store<CharactersState>, private route: ActivatedRoute) {
        this.store.dispatch(getMovies());
    }
}
