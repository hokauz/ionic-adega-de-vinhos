import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, type: string) {
    if (value) {
      return value;
    }
    else {
      switch (type) {
        case 'Tinto':
          return 'assets/mocks/wine-red.png';
      
        case 'Branco':
          return 'assets/mocks/wine-white.png';
      
        case 'Rosé':
          return 'assets/mocks/wine-rose.png';
        
        case 'Doce':
          return 'assets/mocks/wine-sweet.png';

        case 'Espumante':
          return 'assets/mocks/champ.png';
      }
    }
  }
}
