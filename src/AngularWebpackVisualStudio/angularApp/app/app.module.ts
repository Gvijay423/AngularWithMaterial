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
import {NgForComponent} from './builtInDirectives/ngFor.component';
import {NgForGroupedComponent} from './builtInDirectives/ngForGrouped.component';
import {NgIfComponent} from './builtInDirectives/ngIf.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        AppRoutes
    ],

    declarations: [
        AppComponent,
        NgForComponent,
        NgForGroupedComponent,
        NgIfComponent
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }