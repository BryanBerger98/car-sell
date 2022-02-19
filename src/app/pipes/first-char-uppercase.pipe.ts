import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharUppercase'
})
export class FirstCharUppercasePipe implements PipeTransform {

  transform(value: string): string {
    const firstCharUppercase = value.charAt(0).toUpperCase();
    const subStr = value.substring(1);
    return firstCharUppercase + subStr;
  }

}
