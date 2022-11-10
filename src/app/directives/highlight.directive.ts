//Change the appearance or behavior of DOM elements and Angular components with attribute directives.
//https://angular.io/guide/attribute-directives

import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'bringColor'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.boxShadow = '0 2px 16px 0 #3f51b5, 0 3px 8px 0 rgba(63, 81, 181, 0.47), 0 6px 8px -1px #3f51b5';  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.boxShadow = '';  }

  toggle() {
    this.el.nativeElement.style.boxShadow = '';
  }

}
