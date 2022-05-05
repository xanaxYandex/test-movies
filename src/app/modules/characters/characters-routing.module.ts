import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersComponent} from "./characters.component";
import {CharacterDetailedComponent} from "./character-detailed/character-detailed.component";

const routes: Routes = [
    {path: '', component: CharactersComponent},
    {path: ':id', component: CharacterDetailedComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersRoutingModule {}
