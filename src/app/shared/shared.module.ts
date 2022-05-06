import {NgModule} from '@angular/core';
import {LoaderComponent} from "./components/loader/loader.component";
import {RestrictTextPipe} from "./pipes/restrict-text.pipe";
import { RetrieveIdFromUrlPipe } from './pipes/retrieve-id-from-url.pipe';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
    declarations: [LoaderComponent, RestrictTextPipe, RetrieveIdFromUrlPipe, CustomInputComponent],
    exports: [LoaderComponent, RestrictTextPipe, RetrieveIdFromUrlPipe, CustomInputComponent]
})
export class SharedModule {}
