import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

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

  // @HostListener('mouseover') onMouseOver() { 
  //   let punchlineEl = this.el.nativeElement.querySelector('.card-text');
  //   console.log(punchlineEl);
  //   this.renderer.setStyle(punchlineEl, 'display', 'block');
  // }

  // @HostListener('mouseout') onMouseOut() { 
  //   let punchlineEl = this.el.nativeElement.querySelector('.card-text');
  //   this.renderer.setStyle(punchlineEl, 'display', 'none');
  // }
}
