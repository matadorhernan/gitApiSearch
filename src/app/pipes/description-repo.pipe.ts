import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionRepo',
})
export class DescriptionRepoPipe implements PipeTransform {
  transform(value: string): string {
    if (value == null) {
      return `There is not description for this repository`;
    }
    return value;
  }
}
