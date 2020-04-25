import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  color: string = '';
  @HostListener('document:keydown', ['$event'])  handleKeyboardEvent(event: KeyboardEvent) {
        
    switch(event.key) { 
      case 'ArrowUp': { 
         this.color = 'red'; 
         break; 
      } 
      case 'ArrowDown': { 
        this.color = 'green';
         break; 
      } 
      case 'ArrowLeft': { 
        this.color = 'yellow';
        break; 
     } 
     case 'ArrowRight': { 
        this.color = 'blue';
        break; 
   }            
      
   } 

    this.colorier();
  }
  constructor(private el: ElementRef) {

  }
  private colorier(): void
  {
    
    this.el.nativeElement.style.backgroundColor = this.color;

  }


}
