import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ElementsRoutingModule} from './elements-routing.module';
import {EelementsHomeComponent} from './eelements-home/eelements-home.component';
import {PlaceholderComponent} from './placeholder/placeholder.component';
import {TimesDirective} from './times.directive';
import {SharedModule} from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [EelementsHomeComponent,
    PlaceholderComponent,
    TimesDirective,
    SegmentComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class ElementsModule { }
