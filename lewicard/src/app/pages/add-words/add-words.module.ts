import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWordsPageRoutingModule } from './add-words-routing.module';

import { AddWordsPage } from './add-words.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWordsPageRoutingModule
  ],
  declarations: [AddWordsPage]
})
export class AddWordsPageModule {}
