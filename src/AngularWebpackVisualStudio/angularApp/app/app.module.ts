import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Configuration } from './app.constants';
import { AppRoutes } from './app.routes';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ModelDrivenFormComponent } from './Forms/model-driven-form.component';
import { ReactiveModelFormComponent } from './Forms/reactive-model-form.component';
import { TemplateDrivenFormComponent } from './Forms/template-driven-form.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutes
    ],

    declarations: [
        AppComponent,
        ModelDrivenFormComponent,
        ReactiveModelFormComponent,
        TemplateDrivenFormComponent
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }