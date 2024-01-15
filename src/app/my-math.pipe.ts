import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMath',
  standalone: true
})
export class MyMathPipe implements PipeTransform {

  transform(value: number): number {
    return value*value*value;
  }

}
