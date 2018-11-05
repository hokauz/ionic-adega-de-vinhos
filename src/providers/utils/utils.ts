import { Injectable } from '@angular/core';
import {
  Alert,
  AlertButton,
  AlertController,
  AlertOptions,
  ActionSheet,
  ActionSheetButton,
  ActionSheetController,
  Loading,
  LoadingController,
  LoadingOptions,
  MenuController,
  Modal,
  ModalController,
  Platform,
  Popover, 
  PopoverController,
  ToastController,
  ToastOptions,
  TextInput
} from 'ionic-angular';

import { DateTime } from 'luxon';
/**
 * Esta é uma classe especial. Seu propósito é fornecer funções reunitizáveis 
 * tendo em vista a rotina básica de uma aplicação ionic. 
 * 
 * Para evitar a chama e imports de components como ActionSheets, Alerts, Loading, Toast, Menu, Modais, etc. 
 * Criamos aqui m caminho mais fácile e rápido para os mesmo. 
 * 
 * Está não é uma classe estritamente definida. Pode ser modelada de acordo com o tipo de aplicação, 
 * sendo neste desafio apenas um exemplo de reusabilidade 
 * 
 *  NOTE: Utilizamos a biblioteca luxon para trabalharmos com data neste exemplo
 * 
 * @export
 * @class UtilsProvider
 */
@Injectable()
export class UtilsProvider {

  TMZDATE: string; // variavel que definirá o time zone padrão da aplicação
  loading: Loading; 

  constructor(
    private actionCtrl  : ActionSheetController,
    private alertCtrl   : AlertController,
    private loadCtrl    : LoadingController,
    private menuCtrl    : MenuController,
    private modalCtrl   : ModalController,
    private popCtrl     : PopoverController,
    private toastCtrl   : ToastController,
    private platform    : Platform
  ) {
    this.TMZDATE = 'America/Sao_Paulo'; // time zone default de São Paulo (GMT -3:00)
    console.log('Hello UtilsProvider Provider');
  }

  /**
   * Recebe um array de botões do tipo ActionSheet, os configura em novo
   * objeto ActionSheet e o exibe para o usuário. 
   * 
   * NOTE: As funções de callback do botões são criadas no local onde este método é chamado
   *
   * @param {ActionSheetButton} btns
   * @memberof UtilsProvider
   */
  showAction(btns: ActionSheetButton[]) {
    const action: ActionSheet = this.actionCtrl.create({
      buttons: btns
    });
    action.present();
  } // end showAction

  /**
   * 
   * Em alguns casos, o acesso a um menu deve ser definido programaticamente, este método 
   * serve justamente para estes casos. 
   * 
   * Recebe o id do menu e o estado que deverá ser aplicado, 
   * sendo true para ativar e false para desativar. 
   *
   * @param {string} menu // id do menu 
   * @param {boolean} state // estado true/false = ativo/inativo
   * @memberof UtilsProvider
   */
  changeStateMenu(menu: string, state: boolean) {
    this.menuCtrl.enable(state, menu);
  } // end changeStateMenu

  /**
   * Do mesmo modo que é necessário ativar e desativar menus programaticamente,
   * por vezes não é possível usar a diretiva menuToggle para fecha-lo, neste caso
   * usamos este método. 
   *
   * @memberof UtilsProvider
   */
  menuClose() {
    this.menuCtrl.close();
  } // end menuClose

  /**
   * Este método recebe por default uma mensagem para ser exibida em um alert, 
   * podendo receber também um título e botões customizáveis. 
   * 
   * No caso de nenhum botão ser passado para o alert, será assumido 
   * apenas o caso defaul com um campo 'Ok', onde seu callback é um simples dismiss 
   * do component, ou seja, parar a exibição do componente para o usuário. 
   *
   * @param {string} msg // mensagem do alert
   * @param {string} [title] // título opcional do alert
   * @param {AlertButton[]} [btns] // botões opcionais do alert
   * @memberof UtilsProvider
   */
  showSimpleAlert(msg: string, title?: string, btns?: AlertButton[]) {
    if (!btns) {
      btns = [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    };

    let options: AlertOptions = {
      message: msg,
      title: title,
      buttons: btns
    }
    let alert: Alert = this.alertCtrl.create(options);
    alert.present();
  } // end showSimpleAlert

  /**
   * Este método é responsável por exibir um component de espera (loading) para o usuário. 
   * Por default, sua mensagem é 'Por favor, aguarde', mas suporta overide, podendo também 
   * receber um título. 
   * 
   * NOTE: Uma caracteristica deste método e usar uma variável externa (this.loading) para 
   * instanciar o novo component. Isso se dá pelo motivo deste tipo de component necessitar 
   * ser acessado posteriomente para parar sua exibição. De outro modo, criando uma variavel de
   * escopo local neste método, como criamos para o ActionSheet, Alert e Toast... não poderiamos 
   * chamar o método dismiss do load. 
   * 
   *  
   * @param {string} [msg='Por favor, aguarde...'] // mensagem a ser exibida para o usuárop
   * @param {string} [title] // título opcional do loading
   * @memberof UtilsProvider
   */
  showLoading(msg: string = 'Por favor, aguarde...', title?: string) {
    let options: LoadingOptions = {
      content: msg,
    }
    console.log('criou loading');
    this.loading = this.loadCtrl.create(options);
    this.loading.present();
  } // end showLoading

  /**
   * Interrompe a exibição de um loading criado anteriormente
   * 
   * NOTE: Fazemos uma checagem de segurança para saber se realmente existe um objeto loading instanciado,  
   * assegurando que o mesmo sendo chamada de forma errada a aplicação não irá quebrar para o usuário 
   * informando que não existe um component/view para ser aplicado o método dismiss.
   * 
   * @memberof UtilsProvider
   */
  stopLoading() {
    console.log('encerrou loading');

    if (this.loading) {
      this.loading.dismiss();
    }
  } // end  stopLoading

  /**
   * Este método é responsável por exibir um toast do tipo web (seguindo o padrão de ui do ionic).
   * Deve receber uma mensagem, porém, sua duração e posicão possuem valores defaults que podem 
   * sofrer override a depender da chamada. 
   *
   * @param {string} msg // mensagem a ser exibida no toast
   * @param {number} [duration=3000] // duração de 3 segundos por default
   * @param {string} [position='bottom'] // posição interior por default
   * @memberof UtilsProvider
   */
  showToast(msg: string, duration: number = 3000, position: string = 'bottom') {
    let options: ToastOptions = {
      message : msg,
      duration: duration,
      position: position,
      // addPixelsY: -100,
    }

    let toast = this.toastCtrl.create(options);
    toast.present();
  } // end showToast

  showPopOver(component: any): Popover {
    let pop: Popover = this.popCtrl.create(component);
    return pop;
  }
  /**
   * É comum precisarmos chegar o tipo da platarforma na qual a aplicação 
   * está sendo executada. Para não precisarmos importar e instanciar a classe Platform 
   * sempre, utilizamos este método para esta finalidade. 
   *
   * @param {string} type // tipo da plataforma a ser chegada (ios, android, core, mobile, etc)
   * @returns {boolean}
   * @memberof UtilsProvider
   */
  checkPlatform(type: string): boolean {
    return this.platform.is(type);
  } // end checkPlatform

  /**
   * Responsável por criar um modal 
   *
   * @param {string} page // nome da página/component que será exibida como modal
   * @param {object} [params] // parametros optionais para o modal
   * @returns {Modal}
   * @memberof UtilsProvider
   */
  createModal(page: string, params?: object): Modal {
    let modal: Modal = this.modalCtrl.create(page, params);
    return modal;
  } // end CreateModal
  
  /**
   * Retorna a data e hora atual em formato string de acordo com o timezone definido
   *
   * @returns
   * @memberof UtilsProvider
   */
  getDateStrNow() {
    return DateTime.local().toString();
  } // end getDateStrNow

  /**
   * Retorna a data e hora atual em formato ISO em string de acordo com o timezone definido
   *
   *
   * @returns
   * @memberof UtilsProvider
   */
  getDateStrIso() {
    return DateTime.local().toISO();
  } // end getDateStrIso

  /**
   * Ao trabalharmos com Datas em JS, é comum que se perder ter uma diferença de horário 
   * dependendo da localidade de execução para aplicação. Para garantir o padrão do time zone, 
   * nos casos em que necessitamos pegar datas diratemente do usuário, as convertemos em string no 
   * formato ISO de acordo com o time zone default
   * 
   * @param {string} date // data fornecida pelo usuário
   * @returns
   * @memberof UtilsProvider
   */
  getDateStrIsoFromStr(date: string) {
    console.log(date);
    return DateTime.fromISO(date).toString();
  } // end getDateStrIsoFromStr

  /**
   * Método que forca um recurso de usabilidae, que é o autofocus em campo input 
   * ao entrar em uma terminada página. Recebe como paramentro a referência do input
   * que deverá entrar em foco.
   *
   * @param {TextInput} input
   * @memberof UtilsProvider
   */
  setFocusOnInput(input: TextInput) {
    setTimeout(() => {
      input.setFocus();
    }, 300);
  } // end setFocusOnInput
}

