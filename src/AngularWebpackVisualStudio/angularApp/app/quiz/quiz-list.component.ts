import {Component, ViewChild, ViewChildren, ContentChild, ContentChildren, ElementRef, AfterViewInit, AfterContentInit, QueryList} from '@angular/core';

import {Quiz} from '../shared/quiz';
import {QuizComponent} from '../shared/quiz.component';

import './quiz-list.component.scss';

@Component({
    selector: 'quiz-list',
    templateUrl: 'quiz-list.component.html'
})

export class QuizListComponent implements AfterViewInit, AfterContentInit {
    quizlist: Quiz[];

    @ViewChild(QuizComponent) quizViewChild: QuizComponent;
    @ViewChildren(QuizComponent) quizViewChildren: QueryList<QuizComponent>;
    @ViewChild('header') viewHeaderEl: ElementRef;

    @ContentChild(QuizComponent) quizContentChild: QuizComponent;
    @ContentChildren(QuizComponent) quizContentChildren: QueryList<QuizComponent>;
    @ContentChild('contentHeader') contentHeaderEl: ElementRef;

    constructor() {
        this.quizlist = [
           new Quiz("Question 1", "Answer 1"),
           new Quiz("Question 2", "Answer 2")
        ];
        console.log(`new - QuizViewChild is ${this.quizViewChild}`);
    }

    ngAfterContentInit() {
        console.log(`ngAfterContentInit - QuizViewChild is ${this.quizContentChild}`);
        let quizList: QuizComponent[] = this.quizContentChildren.toArray();
        console.log(quizList);
        for (let quizContentChild of quizList){
            console.log(`ngAfterContentInit - QuizContentChildQuestion is ${quizContentChild.data.question}`);
        }
        console.log(this.contentHeaderEl.nativeElement.textContent);
        this.contentHeaderEl.nativeElement.textContent = "Question 3 Modified";
    }

    ngAfterViewInit() {
        console.log(`ngAfterViewInit - QuizViewChild is ${this.quizViewChild}`);

        let quizList: QuizComponent[] = this.quizViewChildren.toArray();
        console.log(quizList);
        for (let quizViewChild of quizList) {
        console.log(`ngAfterViewInit - QuizViewChildQuestion is ${quizViewChild.data.question}`);
        }
        console.log(this.viewHeaderEl.nativeElement.textContent);
        this.viewHeaderEl.nativeElement.textContent = "";
    }
    addQuiz(quiz: Quiz) {
        this.quizlist.unshift(quiz);
    }
}