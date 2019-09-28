import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private elem:ElementRef) {}
  @HostListener("click") onClicks(){
    this.textDeco("blue")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("transparent")
  }


  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor=action;

  }

  

}
