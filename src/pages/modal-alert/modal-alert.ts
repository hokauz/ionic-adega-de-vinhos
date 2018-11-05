import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-alert',
  templateUrl: 'modal-alert.html',
})
export class ModalAlertPage {
  
  type;
  constructor(
    public navCtrl  : NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.type = navParams.get('type');
    console.log(this.type)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAlertPage');
  }

  action(type: string) {
    console.log(type);
    (type == 'cancel') 
      ? this.viewCtrl.dismiss()
      : this.viewCtrl.dismiss(true);
  }
}
