import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DictionaryHomeComponent } from './components/dictionary-home/dictionary-home.component';

const routes: Routes = [
  { path: '', component: DictionaryHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
