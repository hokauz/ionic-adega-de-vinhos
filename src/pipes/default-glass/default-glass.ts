import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultGlass',
})
export class DefaultGlassPipe implements PipeTransform {

  transform(type: string) {
    switch (type) {
      case 'Tinto':
        return 'wine-glass-wine';

      case 'Branco':
        return 'wine-glass-wine';

      case 'Rosé':
        return 'wine-glass-wine';

      case 'Doce':
        return 'wine-glass-sweet';

      case 'Espumante':
        return 'wine-glass-champ';
    }
  }
}
