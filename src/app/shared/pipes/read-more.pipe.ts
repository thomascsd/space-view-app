import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore',
  standalone: true,
})
export class ReadMorePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value.length > 200) {
      value = value.substring(0, 200);
    }

    return value;
  }
}
