import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWineStep_7Page } from './add-wine-step-7';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AddWineStep_7Page,
  ],
  imports: [
    IonicPageModule.forChild(AddWineStep_7Page),
    PipesModule
  ],
})
export class AddWineStep_7PageModule {}
