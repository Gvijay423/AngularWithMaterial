import {Component} from '@angular/core';

import './app.component.scss';
import '../style/app.scss';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    public dateNow: Date = new Date();
    public jsonVal: Object = {
        "name": "raju",
        "details": {
            "good": "yes",
            "bad": "no"
        }
    };
    public customPipeString = "Hello World";
}