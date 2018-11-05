import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWineStep_6Page } from './add-wine-step-6';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AddWineStep_6Page,
  ],
  imports: [
    IonicPageModule.forChild(AddWineStep_6Page),
    PipesModule
  ],
})
export class AddWineStep_6PageModule {}
