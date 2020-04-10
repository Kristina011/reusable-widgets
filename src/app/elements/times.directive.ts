import {Directive, Input, TemplateRef, ViewContainerRef,} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}

  @Input('appTimes') set render(times: number ) {
    this.vcRef.clear();

    for (let i = 0; i < times; i++) {
      this.vcRef.createEmbeddedView(this.tempRef, {});
    }
  }
}
