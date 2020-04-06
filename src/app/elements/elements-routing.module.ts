import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EelementsHomeComponent} from './eelements-home/eelements-home.component';


const routes: Routes = [
  {
    path: 'elements', component: EelementsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
