import { Component, ViewChild } from '@angular/core';

import { SignUp } from './signup.model';

@Component({
    selector: 'templatedriven-form',
    templateUrl: 'template-driven-form.component.html'
})

export class TemplateDrivenFormComponent {
    public model: SignUp = new SignUp();
    @ViewChild('f') form: any;
    public languages: string[] = ["Telugu","English", "Hindi"];
    constructor() { }

    onSubmit() {
        if (this.form.valid) {
            console.log("Form Submitted");
            this.form.reset();
        } else {
            console.log("Form Contains Errors");
        }
    }
}