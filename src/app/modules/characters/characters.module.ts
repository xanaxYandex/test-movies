import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharactersRoutingModule} from './characters-routing.module';
import {CharactersComponent} from './characters.component';
import {CharacterDetailedComponent} from './character-detailed/character-detailed.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        CharactersComponent,
        CharacterDetailedComponent,
    ],
    imports: [
        CommonModule,
        CharactersRoutingModule,
        // StoreModule.forFeature('characters', charactersReducer),
        // EffectsModule.forFeature([CharactersEffects]),
        SharedModule,
        ReactiveFormsModule
    ]
})
export class CharactersModule {}
