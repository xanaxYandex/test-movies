import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
    getCharacterById,
    getCharacterByIdError,
    getCharacterByIdSuccess,
    getCharacters,
    getCharactersError,
    getCharactersSuccess
} from "./characters.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {CharactersService} from "../../services/characters.service";

@Injectable()
export class CharactersEffects {

    public getCharacters$ = createEffect(() => this.actions$
        .pipe(
            ofType(getCharacters),
            switchMap(() =>
                this.charactersService.getCharacters().pipe(
                    map((characters) => getCharactersSuccess({characters: characters.results})),
                    catchError(() => of(getCharactersError()))
                )
            )
        )
    );

    public getCharacterById$ = createEffect(() => this.actions$
        .pipe(
            ofType(getCharacterById),
            switchMap(({charId}) =>
                this.charactersService.getCharacterById(charId).pipe(
                    map((character) => getCharacterByIdSuccess({character})),
                    catchError(() => of(getCharacterByIdError()))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private charactersService: CharactersService
    ) {
    }

}
