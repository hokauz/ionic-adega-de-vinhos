import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

import { Wine } from '../../_models/wine.interface';
import { UtilsProvider } from '../../providers/utils/utils';
import { MESSAGES_MOCK } from '../../_mocks/messages.mock';


@IonicPage()
@Component({
  selector: 'page-wine-details',
  templateUrl: 'wine-details.html',
})
export class WineDetailsPage {

  wine: Wine;

  constructor(
    public navCtrl    : NavController, 
    public navParams  : NavParams,
    private storagePro: LocalStorageProvider,
    private utilsPro  : UtilsProvider,
    private events    : Events
  ) {
    this.wine = navParams.get('wine');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WineDetailsPage');
  }

  openItemToEdit(wine: Wine, page: string) {
    let modal = this.utilsPro.createModal(page, {wine: wine, editMode: true});
    modal.onDidDismiss( changes => {
      if (changes && changes.status) {
        this.wine = changes.wine;
        this.update(changes.wine);
      }
    })
    modal.present();
  }

  async update(wine: Wine) {
    let dataId: string = `wine.${wine.id}`;
    let res: boolean = await this.storagePro.create(dataId, wine);
    if (res) {
      this.events.publish('update', true);
      console.log('dados do vinho atualizado com sucesso');
    }
    else {
      console.log('erro ao atualiza dados deste vinho')
    }
  }

  delete(wine: Wine) {
    const doDelete = () => this.storagePro.remove('wine.' + wine.id)
      .then(res => {
        if (res) {
          this.events.publish('update', true);
          this.utilsPro.showToast('Vinho deletado da lista');
          this.navCtrl.pop();
        }
      });
      
    let modal = this.utilsPro.createModal('ModalAlertPage', { type: MESSAGES_MOCK.delete });
    modal.onDidDismiss(action => {
      if (action) {
        doDelete();
      }
    })
    modal.present();
  }
}
