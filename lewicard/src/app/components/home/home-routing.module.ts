import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'add-words',
    loadChildren: () => import('../../pages/add-words/add-words.module').then(m => m.AddWordsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
