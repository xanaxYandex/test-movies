import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CharactersState} from "./characters.reducer";
import {getIdFromUrl} from "../../shared/utils";

export const charactersState = createFeatureSelector<CharactersState>('characters')

export const charactersSelector = createSelector(charactersState, (state) => state.characters);

export const characterByIdSelector = (id: string) => createSelector(
    charactersSelector,
    (chars) => chars.find(char => getIdFromUrl(char.url) === id) || null
);

export const filteredCharactersSelector = (ids: string[]) => createSelector(
    charactersSelector,
    (chars) => chars.filter(char => ids.includes(getIdFromUrl(char.url))) || []
);

export const charactersByNameSelector = (name: string) => createSelector(
    charactersSelector,
    (chars) => (name.length > 2
        ? chars.filter(char => char.name.toLowerCase().includes(name.toLowerCase()))
        : chars) || []
);

export const requestedCharacterSelector = createSelector(charactersState, (state) => state.selectedCharacter);

export const hasCharactersSelector = createSelector(charactersState, (state) => state.hasValue);

export const characterLoadingSelector = createSelector(charactersState, (state) => state.isLoading);


