import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngfor-grouped',
    template: `
    <h4>NgFor (Grouped)</h4>
        <md-card *ngFor="let group of peopleByCountry">
            {{group.country}}
            <md-card *ngFor="let person of group.people; let i = index">
                {{i+1}} - {{person.name}}
            </md-card>
        </md-card>
    `
})

export class NgForGroupedComponent {
    peopleByCountry: any[] = [
        {
            "country": "UK",
            "people": [
                {
                    "name": "Raju"
                },
                {
                    "name": "Vijay"
                }
            ]
        },
        {
            "country": "US",
            "people": [
                {
                    "name": "Srinu"
                },
                {
                    "name": "Thiru"
                }
            ]
        }
    ];
}