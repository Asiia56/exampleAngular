import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNgxShowOdd]'
})
export class NgxShowOddDirective {
  private hasView = false;
  private items:[] = [];
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appNgxShowOdd(index: number) {
    if ((index & 1) === 1) {
      this.viewContainer.createEmbeddedView(this.templateRef, {index});
      this.hasView = true;
    } else if ((index & 1) === 0) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
