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
        this.quizlist = [
           new Quiz("Question 1", "Answer 1"),
           new Quiz("Question 2", "Answer 2")
        ];
    }

    addQuiz(quiz: Quiz) {
        this.quizlist.unshift(quiz);
    }
}