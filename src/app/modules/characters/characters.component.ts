import {Component} from '@angular/core';
import {debounceTime, Observable, startWith, switchMap} from "rxjs";
import {Store} from "@ngrx/store";
import {CharactersState} from "../../store/characters/characters.reducer";
import {getCharacters} from "../../store/characters/characters.actions";
import {
    characterLoadingSelector, charactersByNameSelector,
    charactersSelector,
    hasCharactersSelector
} from "../../store/characters/characters.selectors";
import {ICharacter} from "../../models/character";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
    public searchField: FormControl = new FormControl('');

    public isLoading$: Observable<boolean> = this.store.select(characterLoadingSelector);

    public characters$: Observable<ICharacter[]> = this.store.select(hasCharactersSelector).pipe(
        switchMap((hasChars) => {
            if (!hasChars) {
                this.store.dispatch(getCharacters());
            }
            return this.searchField.valueChanges.pipe(startWith(''), debounceTime(1000))
        }),
        switchMap((searchText) => this.store.select(charactersByNameSelector(searchText)))
    );

    constructor(private store: Store<CharactersState>) {

    }

}
