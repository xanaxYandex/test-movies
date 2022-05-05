import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovie} from "../models/movie";
import {IApiResponse} from "../models/api-response";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

    constructor(private http: HttpClient) { }

    public getMovies(): Observable<IApiResponse<IMovie>> {
        return this.http.get<IApiResponse<IMovie>>(`https://swapi.dev/api/films/`);
    }

    public getMovieById(id: string): Observable<IMovie> {
        return this.http.get<IMovie>(`https://swapi.dev/api/films/${id}`);
    }
}
