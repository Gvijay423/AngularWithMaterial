import { Component, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Quiz } from './quiz';

import './quiz-form.component.scss';

@Component({
    selector: 'quiz-form',
    templateUrl: 'quiz-form.component.html'
})

export class QuizFormComponent {
    @ViewChild('question') question: ElementRef;
    @ViewChild('answer') answer: ElementRef;
    @Output() quizCreated = new EventEmitter<Quiz>()
    cdRef: ChangeDetectorRef;
    constructor(cdRef: ChangeDetectorRef) {
        this.cdRef = cdRef;
    }
    ngAfterViewInit() {
        this.question.nativeElement.focus();
        this.cdRef.detectChanges()
    }
    createQuiz(question: string, answer: string) {
        if ( question && answer ) {
            this.quizCreated.emit(new Quiz(question, answer));
            this.question.nativeElement.value = "";
            this.answer.nativeElement.value = "";
        }
    }
}