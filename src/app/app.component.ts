import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

// native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';

  constructor(
    public platform    : Platform, 
    public statusBar   : StatusBar, 
    public splashScreen: SplashScreen
  ) {
    this.initializeApp(); // inicia a aplicação  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#1b2036');
      this.splashScreen.hide();
    });
  } // end initializeApp()

}

