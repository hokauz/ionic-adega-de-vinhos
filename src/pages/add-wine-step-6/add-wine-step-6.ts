import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar, ViewController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { Wine } from '../../_models/wine.interface';
import { MESSAGES_MOCK } from '../../_mocks/messages.mock';
import { COUNTRIES_MOCK } from '../../_environments/paises';


@IonicPage()
@Component({
  selector: 'page-add-wine-step-6',
  templateUrl: 'add-wine-step-6.html',
})
export class AddWineStep_6Page {

  @ViewChild('search') searchBar: Searchbar;

  wine: Wine;
  countryList: any[];

  countries: any[];

  editMode: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private utilsPro: UtilsProvider,
    private viewCtrl: ViewController
  ) {
    this.wine = navParams.get('wine');
    this.editMode = navParams.get('editMode');

    this.countryList = COUNTRIES_MOCK;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWineStep_6Page');
  }

  ionViewDidEnter(){
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 200);
  }

  filter(key:string) {
    console.log(key);
    if (!key || key =='' ) {
      this.countries = [];
    }
    else {
      this.countries = this.countryList.filter( elem => {
        let name: string = elem.nome.toLowerCase();
        if (name.includes(key.toLowerCase())) {
          return elem;
        }
      })

    }
  }
  
  next(wine: Wine, country: any) {
    this.wine.country_name = country.nome;
    this.wine.country_iso = country.iso.toLowerCase();

    (this.editMode)
      ? this.viewCtrl.dismiss({
        status: true,
        wine: wine
      })
      : this.navCtrl.push('AddWineStep_7Page', { wine: wine })
  }

  showModal() {
    let modal = this.utilsPro.createModal('ModalAlertPage', { type: MESSAGES_MOCK.country });
    modal.present();
  }


}
