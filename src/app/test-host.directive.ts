import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[testHost]',
    standalone: true
})
export class TestHostDirective {
    @HostBinding('style.color') textColor = 'blue';
    @HostBinding('style.font-size') fontSize = '5rem';

    @HostListener('click', ['$event']) 
    onClick(event: Event) {
        console.log(event);
    }
}