import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


import { Wine } from '../../_models/wine.interface';

@IonicPage()
@Component({
  selector: 'page-add-wine-step-2',
  templateUrl: 'add-wine-step-2.html',
})
export class AddWineStep_2Page {

  wine: Wine;
  types: string[];

  editMode: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.wine = navParams.get('wine');
    this.editMode = navParams.get('editMode');

    this.types = [
      'Tinto',
      'Branco',
      'Rosé',
      'Espumante',
      'Doce'
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWineStep_2Page');
  }

  next(wine: Wine, type: string) {
    wine.type = type;
    (this.editMode)
      ? this.viewCtrl.dismiss({
        status: true,
        wine: wine
      })
      : this.navCtrl.push('AddWineStep_3Page', { wine: wine });
  }
}
