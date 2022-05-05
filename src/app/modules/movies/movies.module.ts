import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './movies.component';
import {MovieDetailedComponent} from './movie-detailed/movie-detailed.component';


@NgModule({
    declarations: [
        MoviesComponent,
        MovieDetailedComponent
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule
    ]
})
export class MoviesModule {}
