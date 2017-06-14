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
    OnDestroy
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

    ngOnChanges() {
        console.log(`ngOnChanges - data is ${this.data}`);
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