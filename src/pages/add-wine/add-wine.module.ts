import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWinePage } from './add-wine';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AddWinePage,
  ],
  imports: [
    IonicPageModule.forChild(AddWinePage),
    PipesModule
  ],
})
export class AddWinePageModule {}
