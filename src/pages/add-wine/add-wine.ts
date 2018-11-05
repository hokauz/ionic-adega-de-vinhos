import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput, ViewController } from 'ionic-angular';

import { UtilsProvider } from '../../providers/utils/utils';
import { Wine, newWine } from '../../_models/wine.interface';
import { MESSAGES_MOCK } from '../../_mocks/messages.mock';

@IonicPage()
@Component({
  selector: 'page-add-wine',
  templateUrl: 'add-wine.html',
})
export class AddWinePage {
  @ViewChild('wineName') wineName: TextInput;

  wine: Wine;
  editMode: boolean;
  
  constructor(
    public navCtrl  : NavController, 
    public navParams: NavParams,
    private utilsPro: UtilsProvider,
    private viewCtrl: ViewController
  ) {
    
    this.editMode = navParams.get('editMode');

    this.wine = (this.editMode) 
      ?  navParams.get('wine')
      :  newWine(this.navParams.get('size'));

    console.log(this.wine);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWinePage');
  }
  
  ionViewDidEnter() {
    this.utilsPro.setFocusOnInput(this.wineName);
  }

  next(wine: Wine) {
    if (wine.name == '') {
      this.showModal()
    }
    else {
      (this.editMode) 
        ? this.viewCtrl.dismiss({
          status: true, 
          wine: wine
        })
        : this.navCtrl.push('AddWineStep_2Page', {wine: wine})
    }
  }

  showModal() {
    let modal = this.utilsPro.createModal('ModalAlertPage', { type: MESSAGES_MOCK.name});
    modal.present();
  }

 }
