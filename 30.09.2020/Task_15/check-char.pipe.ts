import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkChar'
})
export class CheckCharPipe implements PipeTransform {
  transform(value:string): string {
    if (value == "") {
      return
    }
    let newString = value.charAt(0);
    if (newString == newString.toUpperCase()) {
      return "Test";
    } else {
      return value.toUpperCase();
    }
  }
}
