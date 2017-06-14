import {Component} from '@angular/core';

import {Quiz} from '../shared/quiz';

import './quiz-list.component.scss';

@Component({
    selector: 'quiz-list',
    templateUrl: 'quiz-list.component.html'
})

export class QuizListComponent {
    quizlist: Quiz[];

    constructor() {
        this.quizlist = [];
    }

    addQuiz() {
        this.quizlist.unshift(new Quiz("Question 3", "Answer 3"));
    }

    clearQuiz() {
        this.quizlist = [];
    }
}