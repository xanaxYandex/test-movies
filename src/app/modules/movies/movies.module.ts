import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './movies.component';
import {MovieDetailedComponent} from './movie-detailed/movie-detailed.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        MoviesComponent,
        MovieDetailedComponent
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        // StoreModule.forFeature('movies', moviesReducer),
        // EffectsModule.forFeature([MoviesEffects]),
        SharedModule
    ]
})
export class MoviesModule {}
