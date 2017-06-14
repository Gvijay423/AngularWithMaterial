import {
    Component,
    Input,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    SimpleChanges
} from '@angular/core';

import {Quiz} from './quiz';

@Component({
    selector: 'quiz',
    templateUrl: 'quiz.component.html'
})

export class QuizComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
    @Input('quiz') data: Quiz;

    constructor() {
        console.log(`new - data is ${this.data}`);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(`ngOnChanges - data is ${this.data}`);
        for (let key in changes) {
            console.log(`
            ${key} changed.
            Current: ${changes[key].currentValue}.
            Previous: ${changes[key].previousValue}
            `);
        }
    }

    ngOnInit() {
        console.log(`ngOnInit - data is ${this.data}`);
    }

    ngDoCheck() {
        console.log(`ngDoCheck`);
    }

    ngAfterContentInit() {
        console.log(`ngAfterContentInit`);
    }

    ngAfterContentChecked() {
        console.log(`ngAfterContentChecked`);
    }

    ngAfterViewInit() {
        console.log(`ngAfterViewInit`);
    }

    ngAfterViewChecked() {
        console.log(`ngAfterViewChecked`);
    }

    ngOnDestroy() {
        console.log(`ngOnDestroy`);
    }
}