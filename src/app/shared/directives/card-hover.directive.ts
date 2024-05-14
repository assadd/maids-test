import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appCardHoverAnimation]'
})
export class CardHoverAnimationDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.addHoverStyles();

    }

    @HostListener('mouseleave') onMouseLeave() {
        this.removeHoverStyles();

    }

    private addHoverStyles() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'transform 0.3s ease');
        this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1.05)');
    }

    private removeHoverStyles() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
    }
}
