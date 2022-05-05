import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICharacter} from "../models/character";
import {IApiResponse} from "../models/api-response";

@Injectable({
    providedIn: 'root'
})
export class CharactersService {

    constructor(private http: HttpClient) { }

    public getCharacters(): Observable<IApiResponse<ICharacter>> {
        return this.http.get<IApiResponse<ICharacter>>(`https://swapi.dev/api/people/`);
    }

    public getCharacterById(id: string): Observable<ICharacter> {
        return this.http.get<ICharacter>(`https://swapi.dev/api/people/${id}`);
    }
}
