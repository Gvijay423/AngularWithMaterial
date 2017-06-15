import {Component} from '@angular/core';

import {Quiz} from './shared/quiz';

import './app.component.scss';
import '../style/app.scss';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    quiz: Quiz = new Quiz("Question 3", "Answer 3");
}