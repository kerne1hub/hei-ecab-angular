import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[imageLoader]'
})
export class ImageLoaderDirective {
  @Input() defaultSource: string;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) { }

  @HostListener('load')
  public loadingCompleted(): void {
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'hidden');
  }

  @HostListener('error')
  public loadingFailed(): void {
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'srcset');
    this.renderer.setAttribute(this.elementRef.nativeElement, 'src', this.defaultSource);
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'hidden');
  }
}
