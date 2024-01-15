import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private element:ElementRef) {}
  //write a method which will apply the colour
    private highlight(color:string){
      this.element.nativeElement.style.backgroundColor=color;
    }

    //need to apply based on event
    @HostListener('mouseenter') onMouseEnter(){
      this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave(){
      this.highlight("");
    }

    @HostListener('click') onMouseClick(){
      this.highlight('red');

    }



    
   

}
