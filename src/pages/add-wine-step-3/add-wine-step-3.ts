import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput, ViewController } from 'ionic-angular';

import { UtilsProvider } from '../../providers/utils/utils';

import { MESSAGES_MOCK } from '../../_mocks/messages.mock';
import { Wine } from '../../_models/wine.interface';


@IonicPage()
@Component({
  selector: 'page-add-wine-step-3',
  templateUrl: 'add-wine-step-3.html',
})
export class AddWineStep_3Page {
  @ViewChild('wineHarvest') wineHarvest: TextInput;

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
    console.log('ionViewDidLoad AddWineStep_3Page');
  }

  ionViewDidEnter() {
    this.utilsPro.setFocusOnInput(this.wineHarvest);
  }

  next(wine: Wine) {
    if (!wine.harvest) {
      this.showModal();
    }
    else {
      (this.editMode)
        ? this.viewCtrl.dismiss({
            status: true,
            wine: wine
          })
        : this.navCtrl.push('AddWineStep_4Page', { wine: wine });
    }
  }

  showModal() {
    let modal = this.utilsPro.createModal('ModalAlertPage', { type: MESSAGES_MOCK.harvest });
    modal.present();
  }
}
