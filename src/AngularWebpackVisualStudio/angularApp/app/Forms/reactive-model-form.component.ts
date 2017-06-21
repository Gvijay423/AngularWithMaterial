import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
    selector: 'reactivemodel-form',
    template: `
        <md-input-container>
            <input mdInput placeholder="search" [formControl]="searchField">
        </md-input-container>
        <md-list>
            <md-list-item *ngFor="let item of searches">{{item}}
            </md-list-item>
        </md-list>
    `
})

export class ReactiveModelFormComponent implements OnInit, OnDestroy {
    searchField: FormControl;
    searches: string[] = [];
    subscription: Subscription;
     ngOnInit() {
        this.searchField = new FormControl();
        this.subscription = this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(term => {
            if (term) {
                this.searches.push(term);
            }
        });
     }

     ngOnDestroy() {
        this.subscription.unsubscribe();
     }
}