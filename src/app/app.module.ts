import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// modules
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from "@angular/common/http";

// providers
// import { LcboApiProvider } from '../providers/requests/lcbo-api';
import { UtilsProvider } from '../providers/utils/utils';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { RequestsProvider } from '../providers/requests/requests';

// components

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name       : '__adega',
      storeName  : 'wines', 
      driverOrder: ['sqlite', 'indexddb', 'websql', 'localstorage']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UtilsProvider,
    LocalStorageProvider,
    RequestsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
