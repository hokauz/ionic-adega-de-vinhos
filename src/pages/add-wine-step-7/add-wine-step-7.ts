import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput, ViewController} from 'ionic-angular';

import { UtilsProvider } from '../../providers/utils/utils';

import { Wine } from '../../_models/wine.interface';
import { MESSAGES_MOCK } from '../../_mocks/messages.mock';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';


@IonicPage()
@Component({
  selector: 'page-add-wine-step-7',
  templateUrl: 'add-wine-step-7.html',
})
export class AddWineStep_7Page {

  @ViewChild('wineDesc') wineDesc: TextInput;

  wine: Wine;
  editMode: boolean;

  constructor(
    public navCtrl  : NavController,
    public navParams: NavParams,
    private storePro: LocalStorageProvider,
    private utilsPro: UtilsProvider,
    private viewCtrl: ViewController
  ) {
    this.wine = navParams.get('wine');
    this.editMode = navParams.get('editMode');
    console.log(this.wine);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWineStep_7Page');
  }

  ionViewDidEnter() {
    this.utilsPro.setFocusOnInput(this.wineDesc);
  }

  check(wine: Wine) {
    if (wine.description == '') {
      this.showModal();
    }
    else {
      (this.editMode)
        ? this.viewCtrl.dismiss({
          status: true,
          wine: wine
        })
        : this.create(wine);      
    }
  } // check

  showModal(type: any = MESSAGES_MOCK.description ) {
    let modal = this.utilsPro.createModal('ModalAlertPage', { type: type });
    modal.onDidDismiss( action => {
      console.log(action);
      if (action) {
        this.create(this.wine); 
      }
    });
    modal.present();
  } // showModal

  async create(wine: Wine) {
    if (this.editMode) {
      this.viewCtrl.dismiss(wine);
    }
    else {
      this.utilsPro.showLoading();
      let dataId: string = `wine.${wine.id}`;
      let res: boolean = await this.storePro.create(dataId, wine);

      if (res) {
        this.utilsPro.stopLoading();
        this.utilsPro.showToast('Vinho adicionado à sua adega');
        this.navCtrl.setRoot('HomePage');
      }
      else {
        this.utilsPro.stopLoading();
        this.showModal(MESSAGES_MOCK.create);
      }
    }
  } // create
}
