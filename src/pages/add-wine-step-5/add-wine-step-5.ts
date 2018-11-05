import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput, ViewController } from 'ionic-angular';

import { UtilsProvider } from '../../providers/utils/utils';

import { MESSAGES_MOCK } from '../../_mocks/messages.mock';
import { Wine } from '../../_models/wine.interface';


@IonicPage()
@Component({
  selector: 'page-add-wine-step-5',
  templateUrl: 'add-wine-step-5.html',
})
export class AddWineStep_5Page {

  @ViewChild('wineStock') wineStock: TextInput;

  wine: Wine;
  editMode: boolean;

  constructor(
    public navCtrl  : NavController,
    public navParams: NavParams,
    private utilsPro: UtilsProvider,
    private viewCtrl: ViewController
  ) {
    this.wine = navParams.get('wine');
    this.editMode = navParams.get('editMode');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWineStep_5Page');
  }

  ionViewDidEnter() {
    this.utilsPro.setFocusOnInput(this.wineStock);
  }

  next(wine: Wine) {
    if (wine.stock == 0) {
      this.showModal();
    }
    else {
      (this.editMode)
        ? this.viewCtrl.dismiss({
          status: true,
          wine: wine
        })
        : this.navCtrl.push('AddWineStep_6Page', { wine: wine })
    }
  }

  showModal() {
    let modal = this.utilsPro.createModal('ModalAlertPage', { type: MESSAGES_MOCK.stock });
    modal.present();
  }

}
