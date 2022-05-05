
import {createReducer, on} from "@ngrx/store";
import {
    getCharacterById,
    getCharacterByIdError,
    getCharacterByIdSuccess,
    getCharacters,
    getCharactersError,
    getCharactersSuccess
} from "./characters.actions";
import {ICharacter} from "../../models/character";

export interface CharactersState {
    selectedCharacter: ICharacter | null;
    characters: ICharacter[];
    isLoading: boolean;
    hasValue: boolean;
}

export const initialState: CharactersState = {
    selectedCharacter: null,
    characters: [],
    isLoading: false,
    hasValue: false
};

export const charactersReducer = createReducer(
    initialState,
    on(getCharacters, state => ({ ...state, isLoading: true})),
    on(getCharactersSuccess, (state, action) => ({ ...state, characters: action.characters, isLoading: false, hasValue: true})),
    on(getCharactersError, state => ({ ...state, characters: [], hasValue: false, isLoading: false})),
    on(getCharacterById, state => ({ ...state, isLoading: true})),
    on(getCharacterByIdSuccess, (state, action) => ({ ...state, selectedCharacter: action.character, isLoading: false})),
    on(getCharacterByIdError, state => ({ ...state, selectedCharacter: null, hasValue: false, isLoading: false})),
);
