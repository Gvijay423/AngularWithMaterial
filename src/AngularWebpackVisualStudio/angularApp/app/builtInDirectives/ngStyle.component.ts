import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngstyle-example',
    template: `
        <md-card>
            <md-card-title>
                NgStyle Example
            </md-card-title>
            <md-card-content>
                <md-list  *ngFor="let person of people">
                    <md-list-item [ngStyle]="{'color':getColor(person.country), 'font-size.px': 24}">
                        {{person.name}} ({{person.country}})
                    </md-list-item>
                </md-list>
            </md-card-content>
        </md-card>
    `                //         Alternative Syntax  [style.property]
                    //     <md-list-item [style.color]="getColor(person.country)" [style.font-size.px]="42">
                    //     {{person.name}} ({{person.country}})
                    // </md-list-item>
})

export class NgStyleComponent {
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

    getColor(country:string){
        switch(country){
            case "UK":
                return "green";
            case "India":
                return "blue";
            case "US":
                return "red";
        }
    }
}