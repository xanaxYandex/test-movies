import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RestrictTextPipe } from './shared/pipes/restrict-text.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoaderComponent } from './shared/components/loader/loader.component';
import {moviesReducer} from "./store/movies/movies.reducer";
import {charactersReducer} from "./store/characters/characters.reducer";
import {MoviesEffects} from "./store/movies/movies.effects";
import {CharactersEffects} from "./store/characters/characters.effects";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({movies: moviesReducer, characters: charactersReducer}),
        EffectsModule.forRoot([MoviesEffects, CharactersEffects]),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
