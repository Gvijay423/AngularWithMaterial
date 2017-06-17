import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngif-example',
    template: `
        <md-card>
            <md-card-title>
                NgIf Example
            </md-card-title>
            <md-card-content>
                <md-list  *ngFor="let person of people">
                    <md-list-item *ngIf="person.age > 25">
                        {{person.name}}
                    </md-list-item>
                </md-list>
            </md-card-content>
        </md-card>
    `
})

export class NgIfComponent {
        people:any[] =[
        {
            "name": "Raju",
            "age": 25
        },
        {
            "name": "Thiru",
            "age": 26
        },
        {
            "name": "Srinu",
            "age": 30
        },
        {
            "name": "Vijay",
            "age": 25
        }
    ];
}