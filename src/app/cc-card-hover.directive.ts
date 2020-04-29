import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCcCardHover]'
})
export class CcCardHoverDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
    )
   { 
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
    // el.nativeElement.style.backgroundColor = 'gray';
  }

}
