import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./movies.component";
import {MovieDetailedComponent} from "./movie-detailed/movie-detailed.component";

const routes: Routes = [
    {path: '', component: MoviesComponent},
    {path: ':id', component: MovieDetailedComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule {}
