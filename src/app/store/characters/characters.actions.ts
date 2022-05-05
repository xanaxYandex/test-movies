import {createAction, props} from "@ngrx/store";
import {ICharacter} from "../../models/character";
import {CharactersActions} from "./characters.enum";

export const getCharacters = createAction(CharactersActions.GET_CHARACTERS);
export const getCharactersSuccess = createAction(CharactersActions.GET_CHARACTERS_SUCCESS, props<{characters: ICharacter[]}>());
export const getCharactersError = createAction(CharactersActions.GET_CHARACTERS_ERROR);
export const getCharacterById = createAction(CharactersActions.GET_CHARACTER_BY_ID, props<{charId: string}>());
export const getCharacterByIdSuccess = createAction(CharactersActions.GET_CHARACTER_BY_ID_SUCCESS, props<{character: ICharacter}>());
export const getCharacterByIdError = createAction(CharactersActions.GET_CHARACTER_BY_ID_ERROR);
