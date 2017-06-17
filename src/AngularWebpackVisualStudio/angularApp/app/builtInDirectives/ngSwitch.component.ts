import { Component, OnInit } from '@angular/core';

import './ngDirectives.scss';

@Component({
    selector: 'ngswitch-example',
    template: `
        <md-card>
            <md-card-title>
                NgSwitch Example
            </md-card-title>
            <md-card-content>
                <md-list  *ngFor="let person of people" [ngSwitch]="person.country">
                    <md-list-item *ngSwitchCase="'UK'" [class]="'red'">
                        {{person.name}}
                    </md-list-item>
                    <md-list-item *ngSwitchCase="'US'" [class]="'green'">
                        {{person.name}}
                    </md-list-item>
                    <md-list-item *ngSwitchCase="'India'" [class]="'blue'">
                        {{person.name}}
                    </md-list-item>
                    <md-list-item *ngSwitchDefault>
                        {{person.name}}
                    </md-list-item>
                </md-list>
            </md-card-content>
        </md-card>
    `
})

export class NgSwitchComponent {
    people:any[] =[
        {
            "name": "Raju",
            "age": 25,
            "country": "US"
        },
        {
            "name": "Thiru",
            "age": 26,
            "country": "UK"
        },
        {
            "name": "Srinu",
            "age": 30,
            "country": "India"
        },
        {
            "name": "Vijay",
            "age": 25,
            "country": "Kuwait"
        }
    ];
}