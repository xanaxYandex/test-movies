import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/movies'},
    {path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then((m => m.MoviesModule))},
    {path: 'characters', loadChildren: () => import('./modules/characters/characters.module').then((m => m.CharactersModule))}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
