import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngclass-example',
    template: `
         <md-card>
            <md-card-title>
                NgClass Example
            </md-card-title>
            <md-card-content>
                <md-list  *ngFor="let person of people">
                    <md-list-item [ngClass]="{
                        'red': person.country === 'UK',
                        'blue': person.country === 'US',
                        'green': person.country === 'India'
                    }">
                        {{person.name}} ({{person.country}})
                    </md-list-item>
                </md-list>
            </md-card-content>
        </md-card>
    `
                // Alternative Syntax    -- [class.class-name] = "truthly expression"
        //         <md-card>
        //     <md-card-title>
        //         NgClass Example
        //     </md-card-title>
        //     <md-card-content>
        //         <md-list  *ngFor="let person of people">
        //             <md-list-item [class.red]="person.country === 'UK'"
        //                           [class.blue]="person.country === 'US'"
        //                           [class.green]="person.country === 'India'">
        //                 {{person.name}} ({{person.country}})
        //             </md-list-item>
        //         </md-list>
        //     </md-card-content>
        // </md-card>
})

export class NgClassComponent {
    people: any[] = [
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