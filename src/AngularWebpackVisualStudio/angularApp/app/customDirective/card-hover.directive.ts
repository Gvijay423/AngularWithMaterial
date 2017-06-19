import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

import '../builtInDirectives/ngDirectives.scss';

@Directive({
    selector: '[cardHover]'
})

export class CardHoverDirective {
    @HostBinding('class.mdcardborder') private isHovering: boolean;
    @Input('cardHover') config: any = {
        querySelector: ''
    }

//     @Input() config: any{
//         querySelector: ''
//     }
//     <md-card cardHover [config]= "{querySelector: 'md-card-content'}">
//     </md-card>

    constructor(private el: ElementRef, private renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    }

    @HostListener('mouseover') onMouseOver() {
        let part: any = this.el.nativeElement.querySelector(this.config.querySelector);
        this.renderer.setElementStyle(part, 'display', 'block');
        this.isHovering = true;
    }

    @HostListener('mouseout') onMouseOut() {
        let part: any = this.el.nativeElement.querySelector(this.config.querySelector);
        this.renderer.setElementStyle(part, 'display', 'none');
        this.isHovering = false;
    }
}