import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICharacter} from "../models/character";

@Injectable({
    providedIn: 'root'
})
export class CharactersService {

    constructor(private http: HttpClient) { }

    public getCharacters(): Observable<ICharacter[]> {
        return this.http.get<ICharacter[]>(`https://swapi.dev/api/people/`);
    }

    public getCharacterById(id: string): Observable<ICharacter> {
        return this.http.get<ICharacter>(`https://swapi.dev/api/people/${id}`);
    }
}
