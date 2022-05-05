import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

    constructor(private http: HttpClient) { }

    public getMovies(): Observable<IMovie[]> {
        return this.http.get<IMovie[]>(`https://swapi.dev/api/films/`);
    }

    public getMovieById(id: string): Observable<IMovie> {
        return this.http.get<IMovie>(`https://swapi.dev/api/films/${id}`);
    }
}
