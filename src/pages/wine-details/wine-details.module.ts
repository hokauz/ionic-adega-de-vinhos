import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WineDetailsPage } from './wine-details';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    WineDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WineDetailsPage),
    PipesModule
  ],
})
export class WineDetailsPageModule {}
