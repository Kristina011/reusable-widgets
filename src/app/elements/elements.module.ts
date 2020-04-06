import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { EelementsHomeComponent } from './eelements-home/eelements-home.component';


@NgModule({
  declarations: [EelementsHomeComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [
  ]
})
export class ElementsModule { }
