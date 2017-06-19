import { Component } from '@angular/core';

@Component({
    selector: 'ngnonbindable-example',
    template: `
        <md-card>
            <md-card-title>
                NgNonBindable Example
            </md-card-title>
            <md-card-content>
                <pre ngNonBindable>{{name}}</pre>
            </md-card-content>
        </md-card>
    `
})

export class NgNonBindableComponent {

}