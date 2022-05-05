import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {CharactersState} from "../../store/characters/characters.reducer";
import {getCharacters} from "../../store/characters/characters.actions";
import {characterLoadingSelector, charactersSelector} from "../../store/characters/characters.selectors";
import {ICharacter} from "../../models/character";

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
    public characters$: Observable<ICharacter[]> = this.store.select(charactersSelector);
    public isLoading$: Observable<boolean> = this.store.select(characterLoadingSelector);

    constructor(private store: Store<CharactersState>) {
    }

    public ngOnInit(): void {
        this.store.dispatch(getCharacters());
    }

}
