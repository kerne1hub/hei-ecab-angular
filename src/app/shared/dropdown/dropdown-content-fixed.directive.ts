import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Inject
} from '@angular/core';

@Directive({
  selector: '[dropdown-content-fixed]'
})
export class DropdownContentFixedDirective implements OnInit, OnDestroy {
  private triggerElement: HTMLElement;
  private contentElement: HTMLElement;
  private bindedRecalculatePosition: () => void;

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }

  public ngOnInit(): void {
    this.triggerElement = this.elementRef.nativeElement.querySelector('.dropdown-trigger');
    this.contentElement = this.elementRef.nativeElement.querySelector('.dropdown-content');
    this.elementRef.nativeElement.style.position = 'unset';
    this.contentElement.style.position = 'fixed';
    this.contentElement.style.transition = 'none';

    this.bindedRecalculatePosition = this.recalculatePosition.bind(this);
    this.document.addEventListener('scroll', this.bindedRecalculatePosition, true);
  }

  public ngOnDestroy(): void {
    this.document.removeEventListener('scroll', this.bindedRecalculatePosition, true);
  }

  public recalculatePosition(): void {
    if (this.elementRef.nativeElement.classList.contains('dropdown-open')) {
      const contentElementPosition = this.contentElement.getBoundingClientRect();
      const triggerElementPosition = this.triggerElement.getBoundingClientRect();
      const triggerElementTopOffset = this.triggerElement.offsetHeight;

      this.contentElement.style.top = (triggerElementPosition.top + triggerElementTopOffset) + 'px';
      this.contentElement.style.left = (triggerElementPosition.left + triggerElementPosition.width - contentElementPosition.width) + 'px';
      this.contentElement.style.right = triggerElementPosition.right + 'px';
    }
  }
}
