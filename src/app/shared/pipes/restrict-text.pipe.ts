import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restrictText'
})
export class RestrictTextPipe implements PipeTransform {

  transform(text: string): string {
    return text.substring(0, 127) + '...';
  }

}
