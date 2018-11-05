import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'defaultFlag',
})
export class DefaultFlagPipe implements PipeTransform {

  transform(iso: string) {
    // let flag = `flag-${iso.toLowerCase()}`;
    let flag = `assets/flags/svg-basic/${iso.toLowerCase()}.svg`;
    return flag;
  }
}
