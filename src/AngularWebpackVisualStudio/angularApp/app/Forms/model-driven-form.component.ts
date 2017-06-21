import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'modeldriven-form',
    templateUrl: './model-driven-form.component.html'
})

export class ModelDrivenFormComponent implements OnInit {
    myForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;
    language: FormControl;
    public languages: string[] = ["Telugu", "English", "Hindi"];

    createFormControls() {
        this.firstName = new FormControl("", Validators.required);
        this.lastName = new FormControl("", Validators.required);
        this.email = new FormControl("", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
        this.password = new FormControl("", [Validators.required, Validators.minLength(8)]);
        this.language = new FormControl("");
    }

    createForm() {
        this.myForm = new FormGroup({
            name: new FormGroup({
                firstName: this.firstName,
                lastName: this.lastName
            }),
            email: this.email,
            password: this.password,
            language: this.language
        });
    }
    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    onSubmit() {
        if (this.myForm.valid) {
            console.log("Form Submitted");
        } else {
            console.log("Form Contains Errors");
        }
    }
}