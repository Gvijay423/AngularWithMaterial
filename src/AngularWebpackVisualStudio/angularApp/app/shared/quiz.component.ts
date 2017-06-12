import {Component, Input} from '@angular/core';

import {Quiz} from './quiz';

@Component({
    selector: 'quiz',
    templateUrl: 'quiz.component.html'
})

export class QuizComponent {
    @Input('quiz') data: Quiz;
}