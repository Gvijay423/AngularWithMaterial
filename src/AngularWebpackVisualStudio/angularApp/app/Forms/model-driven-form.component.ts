import { Component } from '@angular/core';

@Component({
    selector: 'modeldriven-form',
    templateUrl: './model-driven-form.component.html'
})

export class ModelDrivenFormComponent {
    public languages: string[] = ["Telugu", "English", "Hindi"];

}