import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Output, AfterViewInit, Inject, OnDestroy } from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
	selector: '[outsideClick]',
})
export class OutsideClickDirective implements AfterViewInit, OnDestroy {
	@Output() outsideClick = new EventEmitter<void>();
  clickSubscription: Subscription | undefined;

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    this.clickSubscription = fromEvent(this.document, 'click')
      .pipe(
        filter((event) => {
          return !this.isInside(event.target as HTMLElement);
    }))
      .subscribe(() => {
        this.outsideClick.emit();
    });
  }

  ngOnDestroy(): void {
    this.clickSubscription?.unsubscribe();
  }

  isInside(clickedElement: HTMLElement): boolean {
    return clickedElement === this.elementRef.nativeElement ||
      this.elementRef.nativeElement.contains(clickedElement);
  }
}
