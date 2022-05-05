import {NgModule} from '@angular/core';
import {LoaderComponent} from "./components/loader/loader.component";
import {RestrictTextPipe} from "./pipes/restrict-text.pipe";
import { RetrieveIdFromUrlPipe } from './pipes/retrieve-id-from-url.pipe';

@NgModule({
    declarations: [LoaderComponent, RestrictTextPipe, RetrieveIdFromUrlPipe],
    exports: [LoaderComponent, RestrictTextPipe, RetrieveIdFromUrlPipe]
})
export class SharedModule {}
