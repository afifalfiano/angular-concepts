import { Directive, Input, HostBinding, ElementRef, Renderer2, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: 'img[appCcRollover]'
})
export class CcRolloverDirective implements OnChanges {
  @Input('appCcRollover') config = {
    'initial':'https://unsplash.it/200/300?image=201',
    'over':''
  }

  @HostBinding('src') private imagePath: string;

  ngOnChanges(){
    if(this.config.initial) {
      this.imagePath = this.config.initial;
    }
  }


  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover') onMouseOver() {
    this.imagePath = this.config.initial;
  }

  @HostListener('mouseout') onMouseOut() {
    this.imagePath = this.config.over;
  }
}
