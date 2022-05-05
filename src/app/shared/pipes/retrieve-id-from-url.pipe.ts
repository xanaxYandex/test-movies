import {Pipe, PipeTransform} from '@angular/core';
import {getIdFromUrl} from "../utils";

@Pipe({
    name: 'retrieveIdFromUrl'
})
export class RetrieveIdFromUrlPipe implements PipeTransform {

    transform(url: string): string {
        return getIdFromUrl(url);
    }

}
