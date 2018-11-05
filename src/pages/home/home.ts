import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Select, Events } from 'ionic-angular';

import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { RequestsProvider } from '../../providers/requests/requests';
import { UtilsProvider } from '../../providers/utils/utils';

import { WINES_MOCK } from '../../_mocks/wines.mock';
import { MESSAGES_MOCK } from '../../_mocks/messages.mock';

import { Wine } from '../../_models/wine.interface';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('actions') actions: Select;

  wineList: Wine[];
  wines   : Wine[]
  size    : number;

  noResults: boolean;
  loadProgress: number;
  constructor(
    public navCtrl    : NavController, 
    public navParams  : NavParams,
    private storagePro: LocalStorageProvider,
    private requestPro: RequestsProvider,
    private utilsPro  : UtilsProvider,
    private events    : Events
  ) {
    this.events.subscribe('update', ()=> {
      this.ionViewWillEnter();
    })
    this.loadProgress = 0;
  }

  ionViewWillEnter() {
    this.storagePro.readAll<Wine>('wine')
      .then( list => {
        console.log(list);
        this.size = list.length;
        this.wineList =  (list.length) ?  list :  WINES_MOCK;
        this.wines = [...this.wineList];
        console.log(this.wines);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openModal() {
    let add = this.utilsPro.createModal('AddWinePage', {size: this.size});
    add.present();
  } // end openModal

  openDetails(wine: Wine) {
    if (!this.size) {
      this.showModal(MESSAGES_MOCK.tryEditMock);
    }
    else {
      this.navCtrl.push('WineDetailsPage', {wine: wine});
    }
  } // end openDetails

  deleteAll(size) {
    console.log(size);
    const doDelete = () => this.storagePro.clear()
      .then(res => {
        if (res) {
          this.showModal(MESSAGES_MOCK.deleteAllSuccess);
          this.ionViewWillEnter();
        }
      });

    if (!size) {
      this.showModal(MESSAGES_MOCK.deleteEmpty);
    }
    else {
      let modal = this.utilsPro.createModal('ModalAlertPage', { type: MESSAGES_MOCK.deleteAll });
      modal.onDidDismiss(action => {
        if (action) {
          doDelete();
        }
      })
      modal.present();
    }
  } // end deleteAll

  export(list: Wine[]) {
    if (!this.size) {
      this.showModal(MESSAGES_MOCK.export);
    }
    else {
      this.requestPro.export(list)
        .subscribe(
          req => {
            console.log(req);
          },
          err => {
            console.log(err);
          }
        );

      this.showProgressBar();
    }
  } // end export 

  showModal(type: any) {
    let modal = this.utilsPro.createModal('ModalAlertPage', { type: type });
    modal.present();
  } // showModal

  showProgressBar() {
    let width = 1;

    const frame = () => {
      if (width >= 100) {
        clearInterval(id);
        this.showModal(MESSAGES_MOCK.exportSuccess);
        this.loadProgress = 0;
      } else {
        width++;
        this.loadProgress = width;
      }
    }
    let id = setInterval(frame, 20);
  } // end showProgressBar

  filter(key: string) {
    this.noResults = false;
    console.log(key);
    if (!key || key == '') {
      this.wines = [...this.wineList];
    }
    else {
      this.wines = this.wineList.filter(wine => {
        if (
          wine.name.toLowerCase().includes(key.toLowerCase())         ||
          wine.country_name.toLowerCase().includes(key.toLowerCase()) ||
          wine.type.toLowerCase().includes(key.toLowerCase())         ||
          wine.harvest.toString().includes(key.toLowerCase())         ||
          wine.grape.toLowerCase().includes(key.toLowerCase()) 
        ) {
          return wine;
        }
      })
    }

    if (!this.wines.length) {
      this.noResults = true;
    }
  } // end filter()
}
