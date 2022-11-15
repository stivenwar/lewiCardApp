import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWordsPage } from './add-words.page';

const routes: Routes = [
  {
    path: '',
    component: AddWordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWordsPageRoutingModule {}
