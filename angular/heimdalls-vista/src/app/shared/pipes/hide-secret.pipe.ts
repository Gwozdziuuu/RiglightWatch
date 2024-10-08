import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'hideSecret'
})
export class HideSecretPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) {
      return '•••••';
    }
    return value.replace(/./g, '•');
  }
}
