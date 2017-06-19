import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngfor-example',
    template: `
    <h4>NgFor Example</h4>
        <md-card *ngFor="let person of people; let i = index">
           {{i + 1}} - {{person.name}}
        </md-card>
    `
})

export class NgForComponent {
    people: any[] = [
        {
            "name": "Raju"
        },
        {
            "name": "Thiru"
        },
        {
            "name": "Srinu"
        },
        {
            "name": "Vijay"
        }
    ];
}