import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CharactersRoutingModule} from './characters-routing.module';
import {CharactersComponent} from './characters.component';
import {CharacterDetailedComponent} from './character-detailed/character-detailed.component';


@NgModule({
    declarations: [
        CharactersComponent,
        CharacterDetailedComponent
    ],
    imports: [
        CommonModule,
        CharactersRoutingModule
    ]
})
export class CharactersModule {}
