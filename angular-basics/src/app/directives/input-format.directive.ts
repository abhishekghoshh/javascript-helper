import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input("format") format;

  constructor(private elementRef:ElementRef) { }

  @HostListener("blur") onBlur(){
    console.log("on blur");
    if(this.format == "uppercase"){
      this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase();
    }else{
      this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toLowerCase();
    }
    
  } 
  @HostListener("focus") onFocus(){
    console.log("on focus");
  }

}
