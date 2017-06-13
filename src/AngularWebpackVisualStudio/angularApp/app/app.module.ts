import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Configuration } from './app.constants';
import { AppRoutes } from './app.routes';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuizComponent } from './shared/quiz.component';
import { QuizListComponent } from './quiz/quiz-list.component';
import { QuizFormComponent } from './shared/quiz-form.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        AppRoutes
    ],

    declarations: [
        AppComponent,
        QuizComponent,
        QuizListComponent,
        QuizFormComponent
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }