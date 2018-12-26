import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'noComma' })
export class NoComma implements PipeTransform {
  transform(value: string[]): string {
    return value.join('');
  }
}
